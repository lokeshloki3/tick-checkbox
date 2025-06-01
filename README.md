Demo - https://lokeshloki3.github.io/tick-checkbox/

### Features

1. **Customizable Checkbox**:
   - The component takes the following props:
     - `checked` (boolean): Controls the checked state of the checkbox.
     - `onChange` (function): Callback to handle the state change when the checkbox is toggled.
     - `label` (string): A label displayed next to the checkbox.

2. **Select All Checkbox**:
   - Includes a **"Select All"** checkbox that toggles the state of all child checkboxes.
   - Toggling the "Select All" checkbox will check or uncheck all individual checkboxes.

3. **Individual Checkbox State**:
   - Each checkbox maintains its own independent state, meaning it can be checked or unchecked individually.
   - When any checkbox is toggled, its state updates independently from others.

4. **Automatic "Select All" Checkbox State**:
   - If any checkbox is unchecked, the **"Select All"** checkbox will be unchecked automatically.
   - If all checkboxes are selected, the **"Select All"** checkbox will be checked.

5. **Dynamic Checkbox Rendering**:
   - The component loops through a `listItems` array to dynamically generate checkboxes.
   - Each item in the `listItems` array contains:
     - `label`: Text displayed next to the checkbox.
     - `checked`: Boolean value indicating whether the checkbox is checked or not.
