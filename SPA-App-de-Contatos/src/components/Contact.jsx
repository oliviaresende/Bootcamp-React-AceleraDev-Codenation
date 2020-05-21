import React, { Component } from 'react';
import { formatDate } from '../utils/FormatDate';

class Contact extends Component {
  render() {
    const { avatar, name, phone, country, admissionDate, company, department } = this.props.data
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar"><img src={avatar} alt="avatar" /></span>
        <span className="contact__data" data-testid="contact-name">{name}</span>
        <span className="contact__data" data-testid="contact-phone">{phone}</span>
        <span className="contact__data" data-testid="contact-country">{country}</span>
        <span className="contact__data" data-testid="contact-date">{formatDate(admissionDate)}</span>
        <span className="contact__data" data-testid="contact-company">{company}</span>
        <span className="contact__data" data-testid="contact-department">{department}</span>
      </article>
    );
  }
}

export default Contact;
