import renderer from 'react-test-renderer';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import CharList from './CharList';

  
describe("CharList Component" ,() => {
      
    // Test 1
    test("CharList Rendering", () => {
        render(<CharList/>); // Rendering the App
        const button = component.find('button');
        expect(button).toBeInTheDocument();
    })

})
  