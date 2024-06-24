import React from "react";
function Modal() {
    return(
        <>
     <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  ADD HOUSE
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">GET YOUR DREAM HOME</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="form">
            <form action="">
                   <div><input type="text"name="sizeofhouse"placeholder="sizeofhouse"/></div>
                   <div><input type="number"name="price"placeholder="budgetedprice"/></div>
            </form>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">submit</button>
      </div>
    </div>
  </div>
</div>
         </>
    )
}
export default Modal