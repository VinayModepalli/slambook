import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-header">
                    <p className="navbar-brand text-blue-600">Slambook</p>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">Create</ul>
                    <ul className="navbar-nav">Log out</ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;