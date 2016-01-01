# NuPack_Calc_JS
Redoing the Nulogy coding challenge using JS and Jasmine

Improvements to be made based on feedback from original Calculator (https://github.com/JMazzucco/NuPack_Markup_Calc)
-Run the test suite without inputs. <br/>
-UI could have been extracted to another file, that way we wouldn't have to enter input to run tests.
-Use integration tests that test the whole calculator.
-Separate the CLI code from the part of the code that does calculation.
-Introduce some modules, so that the global namespace does not get polluted.
-Introduce constants for magic numbers.
-Code is not reusable because it is procedural. Extract classes to organize code, and encapsulate state.
