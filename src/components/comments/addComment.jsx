import React, { Component } from 'react'
import { FormInput, FormTextArea } from '../common'
export class AddComment extends Component {
    constructor() {
        super()
        this.state = {
            showError: false,
            formFields: {
                userName: '',
                title: '',
                comment: ''
            }
        }
    }

    validateForm(formErrors, cb) {
        let isInValid = false;
        Object.keys(formErrors).forEach((fieldName, i) => {
            if (formErrors[fieldName].length === 0) {
                return isInValid = true;
            }
        })
        if (isInValid) {
            this.setState({ showError: true });
        }
        else {
            this.setState({ showError: false });
            cb()
        }
    }

    handleChange({ name, value }) {
        this.setState({ formFields: { ...this.state.formFields, [name]: value } });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.validateForm(this.state.formFields, () => {
            this.props.onSubmit(this.state.formFields);
        })
    }
    render() {
        const { userName, title, comment } = this.state.formFields;
        return (<div className="row" >
            <div className="col">
                {this.state.showError && <div className="alert alert-danger" role="alert">
                    All fields are required.
                </div>}
                <form>
                    <FormInput value={userName} name="userName" label='Name' placeholder='Enter user name' onChange={this.handleChange.bind(this)} />
                    <FormInput value={title} name="title" label='Title' placeholder='Enter comment title' onChange={this.handleChange.bind(this)} />
                    <FormTextArea value={comment} name="comment" label='Comment' placeholder='Enter comment' onChange={this.handleChange.bind(this)} />
                    <div className="text-right">
                        <button type="button" onClick={() => { this.props.onCancel() }} className="btn btn-secondary">Cancel
                        </button>
                        <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>)
    }
}