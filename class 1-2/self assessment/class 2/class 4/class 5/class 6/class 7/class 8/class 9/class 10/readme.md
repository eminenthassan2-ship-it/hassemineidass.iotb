**Class 10: Memory & Variables**
Theory
Variable Execution Metrics MatrixFeaturevarletconstScope BoundaryFunction ScopeBlock Scope ({})Block Scope ({})Hoisting BehaviorInitialized as undefinedHoisted into uninitialized stateHoisted into uninitialized stateReassignmentAllowedAllowedPreventedWhy const does not prevent object mutation:When you assign an object or an array to a variable using const, the variable holds a reference pointer to the location in memory where that object is stored, rather than holding the actual data itself. The const keyword only ensures that this reference pointer cannot change to look at a different memory address. It does not stop you from altering or updating the properties inside that stored object or array.The Temporal Dead Zone ExplainedThe Temporal Dead Zone (TDZ) is the period from the start of a block's scope until the line where a variable is explicitly declared with let or const. During this time, the variable exists in memory but cannot be accessed. If you try to read or modify it before its declaration line, JavaScript throws a ReferenceError.How the TDZ prevents bugs:It prevents developers from accidentally reference or using variables before they have been properly initialized with their intended starting values.JavaScriptfunction processMetrics() {
  // TDZ for calculationTarget starts here
  // If you accidentally try to read it early:
  // console.log(calculationTarget); -> Throws ReferenceError instantly, preventing silent errors
  
  let calculationTarget = 42; // TDZ ends here for this variable
  return calculationTarget;
}

<section class="help">
        <h2>How to use (for tutor / non-technical people)</h2>
        <ol>
          <li>Click numbers to enter the first number.</li>
          <li>Click an operator ( + − × ÷ ^ ) to choose the operation.</li>
          <li>Enter the second number (if needed) and press = to get the result.</li>
          <li>Use <strong>C</strong> to clear, <strong>DEL</strong> to remove the last digit.</li>
        </ol>
        <p>Errors (like dividing by zero) will show "Error" in the display.</p>
      </section>

**Product Thinking**
Calculator App State Management Blueprint
display-value: Use let. This value changes constantly as the user presses digit buttons or clears the input.

operator: Use let. The selected mathematical operation (e.g., +, -, *) changes as the user builds their calculation string.

previous-operand: Use let. This store holds the intermediate total calculated from previous operations, meaning its value must be reassigned as the user moves through a multi-step calculation.