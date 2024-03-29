import React from "react";
import './home.css';
import CustomForm from "../../components/form/form";

const Home = () => {
    return (
        <>
            <div>
                <CustomForm readOnlyProp={false} data={
                    {
                        start_date: '2024-03-17',
                        finish_date: '2024-03-18',
                        title: 'Test',
                        description: 'Desc',
                        image: '',
                    }
                    
                } mode="Create"></CustomForm>
            </div>
        </>
    )
}

export default Home;