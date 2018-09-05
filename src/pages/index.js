import React from 'react';
import Link from 'gatsby-link';
import chisel from './../img/chisels.jpeg';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <img src={chisel} alt='chisel' />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
