import React, { useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { fetchStarship } from '../actions'
import { connect } from 'react-redux'
import { Badge, Button, Card, Descriptions, PageHeader, Skeleton } from 'antd'

const Starship = (props) => {
  let { id } = useParams()
  const { fetchStarship, state: { starship, loading } = {} } = props;
  const history= useHistory()
  useEffect(() => {
    fetchStarship(id)
  }, [])

  const starshipKeys = Object.keys(starship)
  const mappedInformation = starshipKeys.map((key) => {
    if (key === 'pilots' || key === 'films') {
      return (
        <Descriptions.Item label={key}>
          {[...starship[key]].join('\n')}
        </Descriptions.Item>
      )
    }
    return (
      <Descriptions.Item label={key}>
        {starship[key]}
      </Descriptions.Item>
  )})

  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title={starship.name}
      />
      <Card>
        {
          loading
            ? <Skeleton />
            : <Descriptions title="Starship Info" column={1} bordered >
              {mappedInformation}
            </Descriptions>
        }
      </Card>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state.sw,
  }
}

const mapDispatchToProps = {
  fetchStarship,
}

const StarshipsItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Starship)

export default StarshipsItem

