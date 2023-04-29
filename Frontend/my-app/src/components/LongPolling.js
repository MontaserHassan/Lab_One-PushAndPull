import { useEffect, useState } from 'react';

function LongPolling () {

    const backendURL = 'http://localhost:3000';
    const [ notifications, setNotifications ] = useState([]);
    const [ input, setInput ] = useState('');

    useEffect(()=>{
            fetch(`${backendURL}/longPolling`)
            .then( res => res.json() )
            .then( res => { 
                setNotifications([ ...notifications, res ]);
                setInput('');
            })
            .catch( error => console.log(error))
    }, [notifications]);
    // error
    // retry policy
    // circut braker 
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`${backendURL}/longPolling/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { title: input } )
        });
        setInput('');
    };

    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    return(
        <>

        <div className="form-wrapper container m-auto">

            <form className="border border-light rounded-2 validate justify-content-between align-items-baseline p-2 my-3" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label for="content" className='fw-bold mt-2'>Content: </label>
                        <input value={input} onChange={handleChange} className="mt-2 mb-3 form-control w-75 m-auto" id="content" name="input" placeholder="Put Message"/>
                    </div>
                    
                    <div className='d-grid gap-2 col-6 mx-auto mt-3 mb-2'>
                        <button type="submit" className="m-auto rounded-2 w-50 btn btn-success">Send Message</button>
                    </div>
                
            </form>

        </div>
        
        <br/>
        <hr className='text-warning w-75 m-auto'></hr>           
        <br/>
        
        <div className='row text-center'>
            <table className="m-auto w-75 table table-striped table-bordered text-center">
                <thead>
                    <tr>
                        <th className='fw-bold text-light'>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map( noti => { return(
                            <tr>
                                <td key={noti._id} className='text-info'>*&nbsp;{noti.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

        </>
    );
};

export default LongPolling;