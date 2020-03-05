import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchStarships } from '../actions'
import { Table, Skeleton, Button, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { Input } from 'antd'
import styled from 'styled-components'
const { Search } = Input

const columns = [
  {
    title: 'Starship name',
    dataIndex: 'name',
    key: 'name',
    render: (text, field) => {
      const url = field.url
      const starshipId = url.slice(url.lastIndexOf('s/')+2, url.lastIndexOf('/'))
      return (<Link to={`${starshipId}/`}>{text}</Link>)
    },
  },
]

const Starships = (props) => {
  const { fetchStarships, state: { next, previous, starships } = {} } = props;

  const url = new URL(window.location)
  const find = url.searchParams.get('search')

  useEffect(() => {
    if (find) {
      fetchStarships(`https://swapi.co/api/starships/?search=${find}`)
    } else {
      fetchStarships()
    }
  }, [fetchStarships])



  const filterStarships = (starshipName) => {
    url.searchParams.set('search', starshipName)
    window.location.href = url.href
  }

  const ButtonContainer = styled.div`
    margin-top: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

  return (
    <div>
      <Search placeholder="input search text" defaultValue={find} onSearch={value => filterStarships(value)} enterButton />
      <br />
      <br />
      <Table loading={props.state.loading}
             dataSource={starships ? starships : []}
             columns={columns}
             pagination={false}
             rowKey={'name'} />
             <ButtonContainer>
               <Button onClick={() => fetchStarships(previous)}>
                 <Icon type={'arrow-left'}/>
               </Button>
               <Button onClick={() => fetchStarships(next)}>
                 <Icon type={'arrow-right'}/>
               </Button>
             </ButtonContainer>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state.sw,
  }
}

const mapDispatchToProps = {
  fetchStarships,
}

const StarshipsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Starships)

export default StarshipsList
