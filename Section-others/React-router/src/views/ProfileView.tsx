import React from "react";
import {RootState} from "../redux";
import {connect, useSelector} from "react-redux";
import Container from "../components/shared/Container";
import Header from "../components/Header";
import ProfileCard from "../components/Authentication/ProfileCard";
import withPermission from "../HOC/withPermission";

declare interface ProfileViewProps {
    user: {
        name: string,
        email: string
    }
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {

    return <>

        <Header title="x-stock" />
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <ProfileCard user={props.user} />
            </div>
        </Container>
    </>
}

// mocked
const mapStateToPropsMock= (state: RootState) => ({
    user: {
        name: 'John Doe',
        email: 'John.Doe@example.com'
    }
})

const mapStateToProps = (state: RootState) => ({
    user: {
        name: state.authentication.user?.user || 'Anonymous',
        email: state.authentication.user?.email || 'Anonymous',
    }
})

//export default ProfileView
export default connect(mapStateToProps)(
    withPermission(['customer', 'admin'], '/login')(ProfileView))
