import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <Col>
            <label htmlFor="example" className="form-label">
              Example
              <input
                {...register('example', {
                  required: true,
                  pattern: /[A-Za-z]/
                })}
                className={`form-control ${errors.example && 'is-invalid'}`}
                maxLength="36"
                name="example"
                id="example"
              />
            </label>
            {/* errors will return when field validation fails  */}
            {errors.example && (
              <div className="invalid-feedback">This field is required</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}
