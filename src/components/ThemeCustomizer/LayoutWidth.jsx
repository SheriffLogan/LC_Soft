import { useDispatch } from 'react-redux';
import { changeLayoutWidth } from '../../redux/actions';
import * as layoutConstants from '../../constants/layout';

const LayoutWidth = ({ layoutWidth }) => {
    const dispatch = useDispatch();

    const handleChangeLayoutWidth = (value) => {
        dispatch(changeLayoutWidth(value));
    };

    return (
        <div className="mb-6 2xl:block hidden">
            <h5 className="font-semibold text-sm mb-3">Content Width</h5>
            <div className="flex flex-col gap-2">
                <div className="flex items-center">
                    <input 
                        className="form-switch form-switch-sm" 
                        type="checkbox" 
                        name="data-layout-width" 
                        id="layout-mode-default" 
                        value={layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID} 
                        onChange={(e) => handleChangeLayoutWidth(e.target.value)} 
                        checked={layoutWidth === layoutConstants.LayoutWidth.LAYOUT_WIDTH_FLUID}
                    />
                    <label className="ms-1.5" htmlFor="layout-mode-default">Fluid</label>
                </div>

                <div className="flex items-center">
                    <input 
                        className="form-switch form-switch-sm" 
                        type="checkbox" 
                        name="data-layout-width" 
                        id="layout-mode-boxed" 
                        value={layoutConstants.LayoutWidth.LAYOUT_WIDTH_BOXED} 
                        onChange={(e) => handleChangeLayoutWidth(e.target.value)} 
                        checked={layoutWidth === layoutConstants.LayoutWidth.LAYOUT_WIDTH_BOXED}
                    />
                    <label className="ms-1.5" htmlFor="layout-mode-boxed">Boxed</label>
                </div>
            </div>
        </div>
    );
};

export default LayoutWidth;
