import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p >Thank you for visiting our website!</p>
        </div>
    </>
  )
}

export default Footer