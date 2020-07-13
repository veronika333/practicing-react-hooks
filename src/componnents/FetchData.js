import React, { useState, useEffect } from 'react';

const githubProfile = {
    repositories: 0,
    followers: 0
}

const FetchData = () => {
const [profile, setProfile] = useState(githubProfile)

async function getMyProfile(){
const response = await fetch('https://api.github.com/users/veronika333');
const jsonResponse = await response.json();
setProfile({
    repositories: jsonResponse.public_repos,
followers: jsonResponse.followers
})
}

useEffect(() => {
    getMyProfile()
}, [])

    return ( 
        <div>
            <h2>Fetching my data from Github API (numbers are updated from github)</h2>
    <p>I have {profile.repositories} repositories and {profile.followers} followers in GitHub.</p>
        </div>
     );
}
 
export default FetchData;
