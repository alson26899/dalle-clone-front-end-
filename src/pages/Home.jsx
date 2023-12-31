import React, { useState, useEffect } from 'react';
import { Loader, FormField, RenderCards } from '../components';
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const renderCommunityText = () => {
    return (
      <div>
        <h1 className='font-extrabold text-[#222238] text-3xl'>
          The Community showcase
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>
    );
  };

  const renderFormField = () => {
    return (
      <div className='mt-16'>
        <FormField />
      </div>
    );
  };

  const renderSearchAndLoading = () => {
    return (
      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing results for
                <span className='text-[#222238] ml-1'>{searchText}</span>
              </h2>
            )}
          </>
        )}
      </div>
    );
  };

  const renderPosts = () => {
    const data = searchText ? [] : [];
    const title = searchText ? 'No results found' : 'No Posts found';

    return (
      <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
        <RenderCards
          data={data}
          title={title}
        />
      </div>
    );
  };
  return (
    <section className='max-w-7xl mx-auto'>
      {renderCommunityText()}
      {renderFormField()}
      {renderSearchAndLoading()}
      {renderPosts()}
    </section>
  );
};

export default Home;
