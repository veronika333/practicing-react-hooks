import React, { useState } from 'react';
import useCustomFetch from "../hooks/useCustomFetch";


const HookUseCustomFetch = () => {
    const [ url, setUrl] = useState(null);
    const [data, loading, error] = useCustomFetch(url);

function getGithubFollowers(e){
if (e.key === "Enter") {
//alert("Enter was pressed")
setUrl("https://api.github.com/users/" + e.target.value);
}
}
    return ( 
        <div>
            <h2>Enter your Github username and see how many followers you have (by using custom useCustomFetch hook)</h2>
       <h2>
       <input onKeyPress={getGithubFollowers}></input>
       {loading && url && <div>Loading...</div>}
       {!loading && data && data.responseData && data.responseData.followers && <div>You have {data.responseData.followers} followers</div> }
    {error && <div>{error}</div>} 
       </h2>
        </div>
     );
}
 
export default HookUseCustomFetch;