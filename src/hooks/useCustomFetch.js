import { useState, useEffect } from 'react';

function useCustomFetch(url) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

async function fetchData(url) {
    try {
const response = await fetch(url);
const responseData = await response.json();
setData({responseData});
setLoading(false);
} catch(e) {
console.log(e);
setError(e);
setLoading(false);
}
}
useEffect(() => {
    setLoading(true);
    setTimeout(function(){
        if(url) {
        fetchData(url)}
    }, 3000);
}, [url]);
return [data, loading, error]
}
 
export default useCustomFetch;