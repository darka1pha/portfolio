import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  image: string;
}

export default function ProjectCard({
  title,
  category,
  tags,
  image,
}: ProjectCardProps) {
  return (
    <div className='group relative'>
      <div className='aspect-[4/3] relative rounded-2xl overflow-hidden'>
        <Image
          src={image}
          alt={title}
          className='object-cover transition-transform group-hover:scale-105'
        />
      </div>
      <div className='mt-4'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <div className='flex space-x-4 mt-2 text-sm text-gray-400'>
          <span>{category}</span>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
