import Card from 'react-bootstrap/Card';
import { MDXRemote } from 'next-mdx-remote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '@/components/media/Image';

export default function CardA({ heading, text, icon, className, image }) {
  return (
    <Card className={`${className} border-0 h-100`}>
      <div className="text-center mb-3 ">
        {icon && <FontAwesomeIcon icon={icon.name} className={icon.class} />}
        {image && <Images image={image} aspect="3x2" className="card-img-top" />}
      </div>
      <Card.Body className="py-3 px-4 px-lg-5">
        <Card.Title className="fs-4">{heading}</Card.Title>
        <MDXRemote {...text.mdx} />
      </Card.Body>
    </Card>
  );
}
