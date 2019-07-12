/**
* Wordpress dependencies
*/
const { InnerBlocks } = wp.editor
const { Fragment } = wp.element;



const Renderer = ( { attributes } ) => {
    console.log(attributes);
    /**
    * Slide inline style
    */
    const styles= () => {
            if ( attributes.backgroundImage && attributes.backgroundColor ) {
                return {
                    backgroundImage: 'url(' + attributes.backgroundImage + ')',
                    backgroundColor: attributes.backgroundColor,
                }
            }
            else if ( attributes.backgroundImage ) {
                return {
                    backgroundImage: 'url(' + attributes.backgroundImage + ')'
                }
            }
            else if ( attributes.backgroundColor ) {
                return {
                    backgroundColor: attributes.backgroundColor
                }
            }
            else ''
        }


  // UI
  return (
    <Fragment>
        <div
          className='jonasm-slide slide'
          style={ styles() }
        >
          { attributes.image_D || attributes.image_L || attributes.image_P || attributes.image_M ?
                <div className='slide-media__wrapper'>
                    <picture className='slide-media'>
                    { attributes.image_D ?
                        <source media='(min-width: 1439px)' srcSet={ attributes.image_D } />
                    :
                        ''
                    }
                    { attributes.image_L ?
                        <source media='(min-width: 1023px)' srcSet={ attributes.image_L } />
                    :
                        ''
                    }
                    { attributes.image_P ?
                        <source media='(min-width: 767px)' srcSet={ attributes.image_P } />
                    :
                        ''
                    }
                        <img
                            className='slide-media__image'
                            src={ attributes.image_M }
                            alt={ attributes.image_alt }
                            title={ attributes.image_title }
                        />
                    </picture>
                </div>
                : ''
            }
            <div className='jonasm-slide__content-wrapper slide__content-wrapper'>
                <div className='jonasm-slide__content slide__content'>
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Renderer
