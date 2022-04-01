import "./ValidateForm.css";

export default function Validate(input) {
  let errors = {};
  if (input.title.length < 3) {
    errors.title = "The title must contain more than 3 letters";
  } else if (input.image.length < 10) {
    errors.image = "Must contain a link";
  } else if (!input.score || input.score < 0 || input.score > 100) {
    errors.score = "The score must be between 0 and 100";
  } else if (!input.healthScore || input.healthScore < 0 || input.healthScore > 100) {
    errors.healthScore = "The healthScore must be between 0 and 100";
  } else if (!input.dishTypes.length) {
    errors.dishTypes = "Select at least one dishtype";
  } else if (!input.diets.length) {
    errors.diets = "Select at least one type of diet";
  } else if (input.summary.length < 9) {
    errors.summary = "The summary must be at least 10 characters";
  } else if (input.instructions.length < 19) {
    errors.instructions = "The instructions must be at least 20 characters";
  }
  return errors;
}
