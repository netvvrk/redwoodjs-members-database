import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
  SelectField,
} from "@redwoodjs/forms"

const ArtworkForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.artwork?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.artwork?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="medium"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Medium
        </Label>

        <TextField
          name="medium"
          defaultValue={props.artwork?.medium}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="medium" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.artwork?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <NumberField
          name="price"
          defaultValue={props.artwork?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="public"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Visible to curators
        </Label>

        <CheckboxField
          name="public"
          defaultChecked={props.artwork?.public}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="public" className="rw-field-error" />

        <Label
          name="duration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Duration (in minutes)
        </Label>

        <NumberField
          name="duration"
          defaultValue={props.artwork?.duration}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="duration" className="rw-field-error" />

        <Label
          name="units"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Units
        </Label>

        <SelectField name="units" defaultValue={props.user?.units}>
          <option>in</option>
          <option>cm</option>
        </SelectField>

        <FieldError name="units" className="rw-field-error" />

        <Label
          name="sizeH"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Height
        </Label>

        <TextField
          name="sizeH"
          defaultValue={props.artwork?.sizeH}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="sizeH" className="rw-field-error" />

        <Label
          name="sizeW"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Width
        </Label>

        <TextField
          name="sizeW"
          defaultValue={props.artwork?.sizeW}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="sizeW" className="rw-field-error" />

        <Label
          name="sizeD"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Depth
        </Label>

        <TextField
          name="sizeD"
          defaultValue={props.artwork?.sizeD}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="sizeD" className="rw-field-error" />

        <Label
          name="location"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location
        </Label>

        <TextField
          name="location"
          defaultValue={props.artwork?.location}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="location" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ArtworkForm
