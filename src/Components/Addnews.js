import React from 'react'
import './Addnews.css'
export default function Addnews() {
  return (
    <>
   
      <div class="container">
  <main>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4 " src="others/addnews.jpg" style={{borderRadius:"45px"}}alt="" width="92" height="77"/>
      <h2>ADD NEWS</h2>
      
    </div>

    <div class="row justify-content-center g-5">
     
      <div class="col-md-8 col-lg-8">
        <h4 class="mb-3">ADD News</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              {/* <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div> */}
              </div>

            {/* <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required/>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div> */}

            <div class="col-12">
              <label for="address" class="form-label">Title</label>
              <input type="text" class="form-control" id="address" placeholder="Title of the news" required/>
              <div class="invalid-feedback">
                Please enter the Title of the news.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Source</label>
              <input type="text" class="form-control" id="address" placeholder="Source of the news" required/>
              <div class="invalid-feedback">
                Please enter the Source of the news.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Description</label>
              <input type="text" class="form-control" id="address" placeholder="Description of the news" required/>
              <div class="invalid-feedback">
                Please enter the Description of the news.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Tag</label>
              <input type="text" class="form-control" id="address" placeholder="Tag" required/>
              <div class="invalid-feedback">
                Please enter the Tag of the news.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Image</label>
              <input type="file" class="form-control" id="address" placeholder="Please insert image" required/>
              <div class="invalid-feedback">
                Please insert Image of the news.
              </div>
            </div>


            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" disabled id="country" required>
                <option value="">India</option>
              
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>

<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
             
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
        

          <hr class="my-4"/>

          {/* <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address"/>
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info"/>
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div> */}
{/* 
          <hr class="my-4"/>

          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div> */}

          {/* <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required/>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
            </div> */}
            </div>
          <hr class="my-4"/>
          
          <button class="w-100 btn btn-primary btn-lg" type="submit">ADD</button>
        
        </form>
        </div>
        </div>
  </main>

  {/* <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2017– Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer> */}


  </div>  </>
  )
}
