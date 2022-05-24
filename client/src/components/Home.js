import React, { useState, useEffect } from 'react'
import book from '../images/book6.gif'
import soil from '../images/soil1.jpg'
import logo from '../images/tree1.gif'
import Info from './Info';
import "../css/home.css"

const Home = () => {

    const [note, setNote] = useState("");
    const [listData, setListData] = useState([]);



    const sendData = async (event) => {
        event.preventDefault();
        console.log(note);

        const res = await fetch('/users/notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                note: note
            })
        })

        const data = await res.json()
        if (!data) {
            window.alert("Failed")
        }
        else {
            window.alert("Success")
        }
        setNote("")
    }



    const tablePage = async () => {
        try {
            const res = await fetch("/users/notes", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                Credential: "include"
            });
            const data = await res.json();

            if (!data) {
                console("Failed to Render")
            }
            else {
                setListData(data)
            }

        } catch (error) {
            console.log("error")
            console.log(error);
        }
    }

    useEffect(() => {
        tablePage()
    }, [listData])


    return (
        <>
            {/* <Info /> */}
            <div className="container">
                <div className="row text-center">
                    <div className="p-3">
                        {/* <h2><i class="bi bi-person-circle"></i></h2> */}
                        <h1 className='text-center font5'>Save the Soil to Save the Environment</h1>

                        <p className='text-muted text-center px-5 mb-2'>
                            Ensuring that our soil is rich and fertile is key to avoiding an ecological disaster.
                        </p>
                        <div className='text-center mb-2'>

                        <a href='https://www.consciousplanet.org/' className='btn btn-outline-success px-4 py-2 text-center'>Learn More <i class=" mx-2 py-1 bi bi-arrow-right-circle-fill"></i></a>
                        </div>



                        <div className="row mt-5">
                            <div className="col-md-6 text-center"><img className='img-fluid' src={soil} alt="" width={500} /></div>
                            <div className="col-md-6 text-center"> <p className='text1'>Eighty-seven percent of life forms on this planet – microbes, worms, insects, birds, animals, human beings, plants, trees and every other vegetation on the planet is sustained by an average of thirty-nine inches of topsoil. And that is in grave danger right now. In the last forty years, forty percent of the world’s topsoil has been lost. The United Nations says we have soil left only for approximately eighty to hundred harvests, which means another forty-five to sixty years of agriculture. After that, we will not have the soil to produce food. You can imagine the suffering that we will unfold in the world. Thirty percent of India’s land is already degraded, and 90% of India’s states are seeing soil turn to desert. That means nothing can be cultivated there. So, protecting the soil for the future generations of this land is the most important thing. </p>
                            </div>

                        </div>


                    </div>

                    <div className="col-md-6 text-center">
                        <img src={book} alt="" width={300} className='img-fluid rounded' />
                    </div>
                    <div className="col-md-6 p-5">
                        <form action="" id='form'>
                            <div className="form-group mb-4 mt-5 pt-4">
                                <textarea name="note" onChange={(e) => {
                                    setNote(e.target.value);
                                }} id="" value={note} className='form-control border-0 border-bottom border-black' placeholder='Enter your opinion'></textarea>
                            </div>
                            <button className="btn btn-outline-dark w-25" onClick={sendData}>Share</button>
                        </form>



                    </div>

                    <div className="container mt-3">
                        <div className="row text-center mx-2">
                        <h3 className='font4'> Let us make it happen!</h3>
                        
                            {
                                listData.map((item) => {
                                    var date = item.date;
                                    var newDate = date.toString().split(";")


                                    return <div className="col-md-4 card my-3 p-3 bg3 text" key={item._id}>
                                       
                                        <p className='text-muted pt-2'> <span className='h4 text-black'><i class="bi bi-person-fill px-2"></i></span>Anonymous User</p>
                                        <p className=' mx-2 text-muted'>{item.note}</p>

                                        <div className="card-footer bg-transparent">

                                            <p>Date : {newDate[0]} ({newDate[1]}) </p>
                                            
                                        </div>


                                    </div>
                                })
                            }

                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}

export default Home