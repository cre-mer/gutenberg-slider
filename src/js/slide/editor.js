
/*
* Import Wordpress dependencies
*/
const { registerBlockType } = wp.blocks;
const { withState } = wp.compose;
const {
  ColorPalette,
  IconButton,
  Panel,
  PanelBody,
  PanelRow
} = wp.components;
const {
  InnerBlocks,
  InspectorControls,
  MediaPlaceholder
 } = wp.editor;
const {
  Fragment
 } = wp.element;
 const { __ } = wp.i18n;

/*
* Slider edit component
*/
const Editor = ( ( { attributes, setAttributes, isSelected } ) => {
    /*
    * Define custom color palette
    */
   const CustomColorPalette = withState( {
    color: '#fff',
   } )( ( { color, setState } ) => {
    const colors = [
        { name: 'grey', color: '#efefef' },
        { name: 'white', color: '#fff' },
    ];

    const handleColorChange = color => {
        setState( { color } )
        setAttributes( { backgroundColor: color } )
    }

    return (
        <ColorPalette
            colors={ colors }
            value={ color }
            onChange={ ( color ) => handleColorChange( color ) }
        />
    )
   } );


   /*
   * Define custom inspector
   */
   const CustomInspector = withState( {
        image_D: '',
        image_L: '',
        image_P: '',
        image_M: ''
    } )( ( { setState } ) => {

/**
 * The following handleSelect* functions are defined to add media for different layout options
 * D = desktop
 * L = landscape (tablet)
 * P = portrait (tablet)
 * M = mobile
 */
        const handleImage_D  = image => {
            setAttributes({
                image_D: image.url
            })
        }
        const handleImage_L  = image => {
            setAttributes({
                image_L: image.url
            })
        }
        const handleImage_P  = image => {
            setAttributes({
                image_P: image.url
            })
        }
        const handleImage_M  = image => {
            setAttributes({
                image_M: image.url,
                image_alt: image.alt,
                image_title: image.title
            })
        }
        const handleBackgroundImage = image => {
            setAttributes({
                backgroundImage: image.url
            })
        }

       return (
           <InspectorControls>
               <PanelBody
                   title='Image for desktop view'
                   initialOpen={ false }
               >
               { ! attributes.image_D ?
                   <MediaPlaceholder
                       labels={{
                           title: 'Choose an image'
                       }}
                       onSelect={ handleImage_D }
                   /> :
                   <div className='div-preview' style={ { backgroundImage: 'url(' + attributes.image_D + ')' } }>
                       <IconButton
                           className='remove-preview'
                           icon='dismiss'
                           onClick={ () => setAttributes({ image_D: '' }) }
                       />
                   </div>
               }
               </PanelBody>
               <PanelBody
                   title='Image for tablet landcape'
                   initialOpen={ false }
               >
               { ! attributes.image_L ?
                   <MediaPlaceholder
                       labels={{
                           title: 'Choose an image'
                       }}
                       onSelect={ handleImage_L }
                   /> :
                   <div className='div-preview' style={ { backgroundImage: 'url(' + attributes.image_L + ')' } }>
                       <IconButton
                           className='remove-preview'
                           icon='dismiss'
                           onClick={ () => setAttributes({ image_L: '' }) }
                       />
                   </div>
               }
               </PanelBody>
               <PanelBody
                   title='Image for tablet portrait'
                   initialOpen={ false }
               >
               { ! attributes.image_P ?
                   <MediaPlaceholder
                       labels={{
                           title: 'Choose an image'
                       }}
                       onSelect={ handleImage_P }
                   /> :
                   <div className='div-preview' style={ { backgroundImage: 'url(' + attributes.image_P + ')' } }>
                       <IconButton
                           className='remove-preview'
                           icon='dismiss'
                           onClick={ () => setAttributes({ image_P: '' }) }
                       />
                   </div>
               }
               </PanelBody>
               <PanelBody
                   title='Image for mobile view'
                   initialOpen={ false }
               >
               { ! attributes.image_M ?
                   <MediaPlaceholder
                       labels={{
                           title: 'Choose an image'
                       }}
                       onSelect={ handleImage_M }
                   /> :
                   <div className='div-preview' style={ { backgroundImage: 'url(' + attributes.image_M + ')' } }>
                       <IconButton
                           className='remove-preview'
                           icon='dismiss'
                           onClick={ () => setAttributes({ image_M: '' }) }
                       />
                   </div>
               }
               </PanelBody>
               <PanelBody
                   title='Background Image'
                   initialOpen={ false }
               >
               { ! attributes.backgroundImage ?
                   <MediaPlaceholder
                       labels={{
                           title: 'Choose a background image'
                       }}
                       onSelect={ handleBackgroundImage }
                   /> :
                   <div className='div-preview' style={ { backgroundImage: 'url(' + attributes.backgroundImage + ')' } }>
                       <IconButton
                           className='remove-preview'
                           icon='dismiss'
                           onClick={ () => setAttributes({ backgroundImage: '' }) }
                       />
                   </div>
               }
               </PanelBody>
               <PanelBody
                   title='Background color'
                   initialOpen={ true }
               >
                   <CustomColorPalette />
               </PanelBody>
           </InspectorControls>
        )
    } )

    return (
        <Fragment key='jonasm-slide__fragment'>
            <CustomInspector />
            <div
                className='jonasm-slide slide'
                style ={ {
                    backgroundImage: `url(" ${ attributes.backgroundImage } ")`,
                    backgroundColor: attributes.backgroundColor
                } }
            >
                <div className='slide-media__wrapper'>
                    <picture className='slide-media'>
                        <source media='(min-width: 1024px)' srcSet={ attributes.image_D } />
                        <source media='(min-width: 768px)' srcSet={ attributes.image_L } />
                        <source media='(min-width: 320px)' srcSet={ attributes.image_P } />
                        <img
                            className='slide-media__image'
                            src={ attributes.image_M }
                            alt={ attributes.image_alt }
                            title={ attributes.image_title }
                        />
                    </picture>
                </div>
                <div className='slide-content'>
                    <InnerBlocks />
                </div>
            </div>
        </Fragment>
    )
})

export default Editor
