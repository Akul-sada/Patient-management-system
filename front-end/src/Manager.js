import React, { useState } from 'react';
import PatientsTable from './components/PatientsTable';
import SearchBar from './components/SearchBar';


const Manager = () => {

    return (
        <>
            <SearchBar />
            <PatientsTable />
        </>

    )
}

export default Manager