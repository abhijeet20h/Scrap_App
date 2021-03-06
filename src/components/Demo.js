import React from 'react'
import './Demo.css'
export default function Demo() {
  return (
    <div>

<header>
  <div class="hero__wrapper">
    <div class="hero__content">
      <h1>Product</h1>
      <p>You really need this product, so hurry and buy it today!</p>
    </div>
    <div class="hero__form">
      <h2>Subscribe to Our Updates</h2>
      <form action="/">
        <label for="email">Enter your email:</label>
        <input id="email" name="email" type="email" />
        <button class="button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</header>
    </div>
  )
}
