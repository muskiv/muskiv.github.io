import React from 'react'

const UserDetails = ({user, getPostId}) => {
  
  return (
  <>
    <div className='main'>
      <div className='userDetail'>
        <div>id: {user.id}</div>
        <div>name: {user.name}</div>
        <div>username: {user.username}</div>
        <div>email: {user.email}</div>
        <div>address street: {user.address.street}</div>
        <div>address suite: {user.address.suite}</div>
        <div>address city: {user.address.city}</div>
        <div>address zipcode: {user.address.zipcode}</div>
        <div>address geo lat: {user.address.geo.lat}</div>
        <div>address geo lng: {user.address.geo.lng}</div>
        <div>phone: {user.phone}</div>
        <div>website: {user.website}</div>
        <div>company name: {user.company.name}</div>
        <div>company catchPhrase: {user.company.catchPhrase}</div>
        <div>company bs: {user.company.bs}</div>
      </div>
      <div className='btnPost'><button onClick={()=> {getPostId(user.id)}}>Get Posts</button></div>
    </div>
  </>
  )
}

export default UserDetails
