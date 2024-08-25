import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { RouterPathEnum } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface subtitles {
  name: string;
  path: RouterPathEnum;
}

interface ItemActiveProps {
  isActive: boolean;
  Icon: IconComponent;
  item: string;
  navigateTo: () => void;
  listSubtitles?: Array<subtitles>;
  onClick: () => void;
  selectedSubtitle?: string | null; // Add this prop
}

const ItemActive: React.FC<ItemActiveProps> = ({
  isActive,
  Icon,
  item,
  listSubtitles,
  onClick,
  navigateTo,
  selectedSubtitle,
}) => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isActive) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [isActive]);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const handleSubtitleClick = (
    subtitle: subtitles,
    event: React.MouseEvent
  ) => {
    event.stopPropagation(); 
    navigate(subtitle.path);
    console.log(subtitle.name, "path", subtitle.path);
  };

  return (
    <div onClick={navigateTo}>
      <div
        className={`flex flex-col items-start ${
          isActive ? "bg-primary" : "bg-transparent"
        } rounded-xl ml-3 mr-5 px-2`}
        onClick={onClick}
      >
        <div className="flex items-center py-2">
          <Icon
            className={`w-6 h-8 transition-all duration-300 ${
              isActive ? "text-white" : "text-black"
            } pointer-events-none`}
          />
          <span
            className={`ml-2 font-medium ${
              isActive ? "text-white" : "text-black"
            } pointer-events-none text-medium hover:font-bold`}
          >
            {item}
          </span>
          {listSubtitles && listSubtitles.length > 0 && (
            <div>
              {isShow ? (
                <ChevronUpIcon
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-black"
                  } ml-18 cursor-pointer`}
                  onClick={handleToggle}
                />
              ) : (
                <ChevronDownIcon
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-black"
                  } ml-18 cursor-pointer`}
                  onClick={handleToggle}
                />
              )}
            </div>
          )}
        </div>
      </div>
      {isActive && isShow && listSubtitles && listSubtitles.length > 0 && (
        <ul className="pt-2">
          {listSubtitles.map((subtitle, index) => (
            <li
              key={index}
              className={`text-sm text-black mb-2 hover:font-bold ${
                selectedSubtitle === subtitle.name ? "font-bold" : ""
              }`}
            >
              <div
                className="relative flex items-center"
                onClick={(event) => handleSubtitleClick(subtitle, event)}
              >
                {selectedSubtitle === subtitle.name && (
                  <ChevronRightIcon className="absolute left-0 w-4 h-4" />
                )}
                <button
                  className={`ml-7 pl-5 text-black ${
                    selectedSubtitle === subtitle.name ? "font-bold" : ""
                  }`}
                >
                  {subtitle.name}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemActive;
