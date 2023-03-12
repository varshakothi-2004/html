<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-compatible" content="IE-edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration Form</title>
    
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="index.js" />
    
 </head>
 <body>
   <div class="container">
     <div class="registration">Registration Form</div>
     <form id="user-form">
       <div class="sub-container">
         <label for="name">Name</label>
         <input
           type="text"
           name="name"
           id="name"
           required
           placeholder="Enter full name"
         />
       </div>
       
       <div class="sub-container">
         <label for="email">Email</label>
         <input
         type="email"
         name="email"
         id="email"
         required
         placeholder="Enter email"
       />
       </div>
       
       <div class="sub-container">
         <label for="password">Password</label>
         <input
           type="password"
           name="password"
           id="password"
           required
           placeholder="Enter password"
         />
       </div>
       
       <div class="sub-container">
         <label for="dob">Date of Birth</label>
         <input type="date" name="dob" required id="dob" />
       </div>
       
       <div class="sub-container">
         <input type="checkbox" name="check-box" required id="check-box">
         <label for="check-box" class="accept-text"
                >Accept Terms and Conditions</label>
         >
       </div>
       
       <button id="submit" type="submit">Submit</button>
     </form>
     <script src="./index.js"></script>
   </div>
   
   <div class="fillers">
     <div id="entries-heading">Entries</div>
     <div id="user-entries">
       <table id="user-table">
         <tr>
           <th>Name</th>
           <th>Email</th>
           <th>Password</th>
           <th>Dob</th>
           <th>Accepted terms?</th>
         </tr>
       </table>
     </div>
   </div>
  </body>
</html>

     
      
     
     
           
