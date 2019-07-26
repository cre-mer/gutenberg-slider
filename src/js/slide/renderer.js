/**
* Wordpress dependencies
*/
const { InnerBlocks } = wp.blockEditor;
const { Fragment } = wp.element;



const Renderer = props => {
	const {
            attributes: {
                backgroundColor,
				backgroundImage,
				image_D,
				image_L,
				image_P,
				image_M,
				image_alt,
				image_title
            }
        } = props;

	var classes = 'jonasm-slide slide';
	if (typeof (backgroundColor) !== 'undefined' && backgroundColor != '') {
		classes += ' ' + backgroundColor;
	}

	// Slide inline style
	const styles= () => {
			if ( backgroundImage ) {
				return {
					backgroundImage: 'url(' + backgroundImage + ')'
				}
			}
		}


return (
	<Fragment>
		<div
			className={ classes }
			style={ styles }
		>
			{ image_D || image_L || image_P || image_M ?
				<div className='slide-media__wrapper'>
					<picture className='slide-media'>
					{ image_D ?
						<source media='(min-width: 1439px)' srcSet={ image_D } />
					:
						''
					}
					{ image_L ?
						<source media='(min-width: 1023px)' srcSet={ image_L } />
					:
						''
					}
					{ image_P ?
						<source media='(min-width: 767px)' srcSet={ image_P } />
					:
						''
					}
						<img
							className='slide-media__image'
							src={ image_M }
							alt={ image_alt }
							title={ image_title }
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
