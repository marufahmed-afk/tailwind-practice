import React from 'react';
import CustomButton from '../app/components/atoms/CustomButton';
import CustomButtonAdvanced from '../app/components/atoms/CustomButtonAdvanced';

const buttons = () => {
  return (
    <div className="container mt-10 max-w-sm">
      {/* dark keyword example */}
      <h1 className="text-center text-xl font-bold">Dark Example</h1>
      <div className="mt-10 flex flex-wrap gap-10">
        <CustomButton />
      </div>
      <div className="dark mt-10 flex flex-wrap gap-10">
        <CustomButton />
      </div>
      {/* css variable theming */}
      <h1 className="mt-10 text-center text-xl font-bold">Theming Example</h1>
      <div className="mt-10 flex flex-wrap gap-10">
        <CustomButtonAdvanced />
      </div>
      <div className="theme-dark mt-10 flex flex-wrap gap-10">
        <CustomButtonAdvanced />
      </div>
      <div className="theme-cyberpunk mt-10 flex flex-wrap gap-10">
        <CustomButtonAdvanced />
      </div>
    </div>
  );
};

export default buttons;
