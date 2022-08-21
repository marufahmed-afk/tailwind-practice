import React from 'react';

const daisy = () => {
  return (
    <div className="container mt-10 grid place-items-center">
      {/* <h1 className="mb-20">daisyUI Example</h1> */}
      <label htmlFor="my-modal" className="modal-button btn">
        open modal
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Congratulations!</h3>
          <p className="py-4">
            We have reached the <span className="font-bold">END</span> of this
            session :)
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default daisy;
