import React, { useContext } from 'react'
import { Card, Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { MemoryContext } from '../contexts/MemoryContext';



const Profile = () => {
    const { userProfile } = useContext(MemoryContext);
    return (
            <Container>
                <div className="text-center py-5 profile-section">
                    <img src="https://pbs.twimg.com/profile_images/1171432207530881024/27nxZ8dT_400x400.jpg" className="rounded-circle" />
                    <h4 className="my-2">{userProfile.username}</h4>
                <span className="follow-info mx-3 px-1">{userProfile.followers.length} Followers</span><span className="follow-info mx-3 px-1">{userProfile.following.length} Following</span>
                </div>
            </Container>
    )
}

export default Profile;
