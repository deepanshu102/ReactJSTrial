import React from 'react'

export const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Shopper-shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="col-lg-7">
  
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link active" href="#">About</a>
            <a class="nav-item nav-link active" href="#">conatact us</a>
            <a class="nav-item nav-link active btn" href="#">login</a>
          </div>
        </div>
      </nav>
    )
}
