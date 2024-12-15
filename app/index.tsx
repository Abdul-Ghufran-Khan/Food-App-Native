import React from 'react'
import Loadpage from '@/components/Loadpage'
import { Redirect } from 'expo-router';

const index = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 4000);
    }, []);

    if (isLoaded) {
       return <Redirect href="/home"/>
    }

  return (
    <Loadpage/>
  )
}

export default index