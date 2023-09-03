import React from 'react';

const ContactGroup = ({ data }) => {
	return (
		<article style={{ letterSpacing: '2px' }} className='contact-group'>
			<h3 style={{ fontSize: '1.6rem', fontWeight: '900' }}>{data.title}</h3>
			{data.mail && <a href={`mailto:${data.mail}`}>{data.mail}</a>}
			{data.tlf && <p style={{ fontSize: '1.3rem' }}>{data.tlf}</p>}
			{data.name && data.url && (
				<a href={data.url} target='_blank' style={{ fontSize: '1.3rem' }}>
					{data.name}
				</a>
			)}
			{data.name && !data.url && <p style={{ fontSize: '1.3rem' }}>{data.name}</p>}
		</article>
	);
};

export default ContactGroup;
