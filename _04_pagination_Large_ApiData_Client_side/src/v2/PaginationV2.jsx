import React, { useState } from 'react'
import { faker } from "@faker-js/faker"

const PaginationV2 = () => {

    // create the dummy data 
    const dummyData = Array.from({ length: 30 }, () => ({
        id: faker.string.uuid(),
        userName: faker.internet.username(),
        emailId: faker.internet.email()
    }))
    //    steps 
    const [data] = useState(dummyData);

    // currentPage state 
    const [currentPage, setCurrentPage] = useState(1);// default current page is 1 

    // itemPerPage 
    const itemPerPage = 10;
    // totalPage 
    const totalPage = Math.ceil(data.length / itemPerPage);
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <div>
            <h1 style={{ padding: "20px", textAlign: "center" }}>pagination v2 </h1>

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
                {/* render current data */}
                {
                    Array.isArray(currentItem) && currentItem.map((item, index) => (
                        <div key={index} style={{ width: "300px", padding: "20px", textAlign: "center", border: ".5px solid gray" }}>
                            <p>{item.userName}</p>
                            <p>{item.emailId}</p>
                        </div>
                    ))
                }
            </div>


            {/* footer next and prev */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    Previous
                </button>
                {/* render all pages  */}
                {
                    Array.from({ length: totalPage }, (_, i) => {
                        const isActive = currentPage === i + 1;
                        return (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                disabled={isActive}
                                style={{
                                    backgroundColor: isActive ? "#007bff" : "#e9ecef",
                                    color: isActive ? "white" : "black",
                                    padding: "8px 12px",
                                    margin: "0 4px",
                                    border: "1px solid #dee2e6",
                                    borderRadius: "4px",
                                    cursor: isActive ? "default" : "pointer",
                                    fontWeight: isActive ? "bold" : "normal"
                                }}
                            >
                                {i + 1}
                            </button>
                        );
                    })
                }
                <button disabled={currentPage === totalPage} onClick={() => setCurrentPage(currentPage + 1)}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default PaginationV2
