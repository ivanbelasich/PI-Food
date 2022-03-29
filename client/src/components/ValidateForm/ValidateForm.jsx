import "./ValidateForm.css";

export default function Validate(input) {
  let errors = {};
  if (input.title.length < 3) {
    errors.title = "The title must contain more than 3 letters";
  } else if (input.image.length < 10) {
    errors.image = "Must contain a link";
  } else if (input.score > 100 || input.score < 0) {
    errors.score = "The score must be between 0 and 100";
  } else if (input.healthScore > 100 || input.healthScore < 0) {
    errors.healthScore = "The healthScore must be between 0 and 100";
  } else if (!input.dishTypes.length < 1) {
    errors.dishTypes = "Select a dishtype";
  } else if (!input.diets.length < 1) {
    errors.diets = "Select at least one type of diet";
  } else if (input.summary.length < 10) {
    errors.summary = "The summary must be at least 10 characters";
  } else if (input.instructions.length < 20) {
    errors.instructions = "The instructions must be at least 20 characters";
  }
  return errors;
}
