
/*
* Import Wordpress dependencies
*/
const { registerBlockType } = wp.blocks;
const { withState } = wp.compose;
const {
	IconButton,
	Panel,
	PanelBody,
	PanelRow
} = wp.components;
const {
	getColorClassName,
	getColorObjectByColorValue,
	ColorPalette,
	InnerBlocks,
	InspectorControls,
	MediaPlaceholder
 } = wp.blockEditor;
const { select } = wp.data;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

/*
* Slide edit component
*/
const Editor = props => {
	const { attributes: {
		backgroundColor,
		backgroundImage,
		image_D,
		image_L,
		image_P,
		image_M,
		image_alt,
		image_title
	},
	clientId, setAttributes, isSelected } = props;
	const parentId = select('core/block-editor').getBlockRootClientId( clientId );
	const parent = select('core/block-editor').getBlocksByClientId( parentId );
	const parentWidth = $(`#block-${parentId}`).width();
	const slidesNr = parent[0].innerBlocks.length;
	const settings = select('core/editor').getEditorSettings();
	const onChangeBackgroundColor = content => {
		if ( content == undefined ) {
			setAttributes( { backgroundColor: '' } );
			return;
		}
		var colorObject = getColorObjectByColorValue(settings.colors, content);
		setAttributes( { backgroundColor: getColorClassName( 'background-color', colorObject.slug ) } )
	};
	var classes = 'jonasm-slide slide';
	if (typeof (backgroundColor) !== 'undefined' && backgroundColor != '') {
        classes += ' ' + backgroundColor;
    }


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
		const handleImage_D = image => {
			setAttributes( {
				image_D: image.url
			} )
		}
		const handleImage_L = image => {
			setAttributes( {
				image_L: image.url
			} )
		}
		const handleImage_P = image => {
			setAttributes( {
				image_P: image.url
			} )
		}
		const handleImage_M = image => {
			setAttributes( {
				image_M: image.url,
				image_alt: image.alt,
				image_title: image.title
			} )
		}
		const handleBackgroundImage = image => {
			setAttributes( {
				backgroundImage: image.url
			} )
		}

		return (
			<InspectorControls>
				<PanelBody
					title='Image for desktop view'
					initialOpen={ false }
				>
				{ ! image_D ?
					<MediaPlaceholder
						labels={{
							title: 'Choose an image'
						}}
						onSelect={ handleImage_D }
					/> :
					<div className='div-preview' style={ { backgroundImage: 'url(' + image_D + ')' } }>
						<IconButton
							className='remove-preview'
							icon='dismiss'
							onClick={ () => setAttributes( { image_D: '' } ) }
						/>
					</div>
				}
				</PanelBody>
				<PanelBody
					title='Image for tablet landcape'
					initialOpen={ false }
				>
				{ ! image_L ?
					<MediaPlaceholder
						labels={{
							title: 'Choose an image'
						}}
						onSelect={ handleImage_L }
					/> :
					<div className='div-preview' style={ { backgroundImage: 'url(' + image_L + ')' } }>
						<IconButton
							className='remove-preview'
							icon='dismiss'
							onClick={ () => setAttributes( { image_L: '' } ) }
						/>
					</div>
				}
				</PanelBody>
				<PanelBody
					title='Image for tablet portrait'
					initialOpen={ false }
				>
				{ ! image_P ?
					<MediaPlaceholder
						labels={{
							title: 'Choose an image'
						}}
						onSelect={ handleImage_P }
					/> :
					<div className='div-preview' style={ { backgroundImage: 'url(' + image_P + ')' } }>
						<IconButton
							className='remove-preview'
							icon='dismiss'
							onClick={ () => setAttributes( { image_P: '' } ) }
						/>
					</div>
				}
				</PanelBody>
				<PanelBody
					title='Image for mobile view'
					initialOpen={ false }
				>
				{ ! image_M ?
					<MediaPlaceholder
						labels={{
							title: 'Choose an image'
						}}
						onSelect={ handleImage_M }
					/> :
					<div className='div-preview' style={ { backgroundImage: 'url(' + image_M + ')' } }>
						<IconButton
							className='remove-preview'
							icon='dismiss'
							onClick={ () => setAttributes( { image_M: '' } ) }
						/>
					</div>
				}
				</PanelBody>
				<PanelBody
					title='Background Image'
					initialOpen={ false }
				>
				{ ! backgroundImage ?
					<MediaPlaceholder
						labels={{
							title: 'Choose a background image'
						}}
						onSelect={ handleBackgroundImage }
					/> :
					<div className='div-preview' style={ { backgroundImage: 'url(' + backgroundImage + ')' } }>
						<IconButton
							className='remove-preview'
							icon='dismiss'
							onClick={ () => setAttributes( { backgroundImage: '' } ) }
						/>
					</div>
				}
				</PanelBody>
				<PanelBody
					title='Background color'
					initialOpen={ true }
				>
					<ColorPalette
						label={ __( 'Background-Color' ) }
						value={ backgroundColor }
						onChange={ onChangeBackgroundColor }
					/>
				</PanelBody>
			</InspectorControls>
		)
	} )

	return (
		<Fragment key='jonasm-slide__fragment'>
			<CustomInspector />
			<div
				className={ classes }
				style={ {
					backgroundImage: `url(" ${ backgroundImage } ")`,
					width: parentWidth
				} }
			>
				<div className='slide-media__wrapper'>
					<picture className='slide-media'>
						<source media='(min-width: 1024px)' srcSet={ image_D } />
						<source media='(min-width: 768px)' srcSet={ image_L } />
						<source media='(min-width: 320px)' srcSet={ image_P } />
						<img
							className='slide-media__image'
							src={ image_M }
							alt={ image_alt }
							title={ image_title }
						/>
					</picture>
				</div>
				<div className='slide-content'>
					<InnerBlocks />
				</div>
			</div>
		</Fragment>
	)
};

export default Editor
