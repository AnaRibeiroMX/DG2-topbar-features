import { useState, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import svgPaths from "../imports/svg-978hna2a62";

// Icon components for the Last Name header
function SortingIconAsc() {
  return (
    <div
      className="relative shrink-0 size-[12px]"
      data-name="sorting"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="sortASC">
          <path
            d={svgPaths.p28b49b00}
            fill="var(--fill-0, #6C7180)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SortingIconDesc() {
  return (
    <div
      className="relative shrink-0 size-[12px]"
      data-name="sorting"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="sortDESC">
          <path
            d="M3.10875 7.39125L3.64125 6.85875L5.625 8.84625V1.5H6.375V8.84625L8.35875 6.85875L8.89125 7.39125L6 10.27875L3.10875 7.39125Z"
            fill="var(--fill-0, #6C7180)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function FilterIcon() {
  return (
    <div
      className="relative shrink-0 size-[12px]"
      data-name="Filter-Sort / filter"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Filter-Sort / filter">
          <path
            d={svgPaths.p2a5cbd00}
            fill="var(--fill-0, #6C7180)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="text-slate-600"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21L16.65 16.65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FilterIconFilled() {
  return (
    <div
      className="relative shrink-0 size-[12px]"
      data-name="Filter-Sort / filter-filled"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Filter-Sort / filter-filled">
          <path
            d="M2 2.5H10L6.5 6.5V9.5L5.5 10V6.5L2 2.5Z"
            fill="#2f3646"
            stroke="#2f3646"
            strokeWidth="0.5"
          />
        </g>
      </svg>
    </div>
  );
}

function KebabIcon() {
  return (
    <div className="h-[10px] relative shrink-0 w-[2px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 2 10"
      >
        <g id="Group 1800">
          <path
            d={svgPaths.p15bb1c30}
            fill="var(--fill-0, #6C7180)"
            id="Vector"
          />
          <path
            d={svgPaths.p6e7fd40}
            fill="var(--fill-0, #6C7180)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p31858b40}
            fill="var(--fill-0, #6C7180)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

// Menu icons
function MenuFilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.16675 5.83333H15.8334M6.66675 10H13.3334M9.16675 14.1667H10.8334"
        stroke="#6C7180"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuSortAscIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 15.8333V4.16666M10 4.16666L5.83333 8.33333M10 4.16666L14.1667 8.33333"
        stroke="#6C7180"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuSortDescIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 4.16666V15.8333M10 15.8333L14.1667 11.6667M10 15.8333L5.83333 11.6667"
        stroke="#6C7180"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#6C7180"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Not used - moved to LastNameColumn
function LastNameHeader_OLD({ data }: { data: string[] }) {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<
    "sort" | "filter" | "kebab" | null
  >(null);
  const [sortState, setSortState] = useState<
    "none" | "asc" | "desc"
  >("none");
  const [showKebabMenu, setShowKebabMenu] = useState(false);
  const [sortedData, setSortedData] = useState<string[]>(data);

  const handleSortClick = () => {
    let newSortState: "none" | "asc" | "desc";
    let newData = [...data];

    if (sortState === "none" || sortState === "desc") {
      newSortState = "asc";
      newData.sort((a, b) => a.localeCompare(b));
    } else {
      newSortState = "desc";
      newData.sort((a, b) => b.localeCompare(a));
    }

    setSortState(newSortState);
    setSortedData(newData);
  };

  const handleUnsort = () => {
    setSortState("none");
    setSortedData(data);
    setShowKebabMenu(false);
  };

  const handleKebabClick = () => {
    setShowKebabMenu(!showKebabMenu);
  };

  return (
    <>
      <div
        className="bg-white content-stretch flex items-center justify-between mb-[-1px] relative shrink-0 w-[236px] group sticky top-0 z-[1]"
        data-name="dg2Topbar"
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => {
          setIsHeaderHovered(false);
          setHoveredIcon(null);
        }}
      >
        {/* Dragger */}
        <div
          className="h-[34px] shrink-0 w-[12.879px]"
          data-name="dragger"
        />

        {/* Active content */}
        <div
          className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative"
          data-name="active"
        >
          {/* Content with text */}
          <div
            className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pr-[12.879px] relative"
            data-name="content"
          >
            {/* Dragger */}
            <div
              className="content-stretch flex items-center mr-[-12.879px] relative shrink-0"
              data-name="dragger"
            >
              <div
                className="h-[34px] shrink-0 w-[12.879px]"
                data-name="dragger"
              />
            </div>

            {/* Text content */}
            <div
              className="content-stretch flex items-center mr-[-12.879px] pr-[4px] py-[10px] relative shrink-0 w-[85px]"
              data-name="content"
            >
              <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] leading-[14px] min-h-px min-w-px not-italic relative text-[12px] text-black whitespace-pre-wrap">
                Last name
              </p>
            </div>

            {/* Icons container */}
            <div
              className={`content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px mr-[-12.879px] relative transition-opacity duration-200 ${
                isHeaderHovered || sortState !== "none"
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              data-name="Icons"
            >
              {/* Sort icon - always visible when sorted or on hover */}
              <div
                className="h-[34px] relative shrink-0 w-[26px]"
                data-name="sort"
              >
                <div
                  className="absolute content-stretch flex items-center justify-center left-[4px] p-[3px] rounded-[9px] top-[8px] cursor-pointer"
                  data-name="sorting"
                  onMouseEnter={() => setHoveredIcon("sort")}
                  onMouseLeave={() => setHoveredIcon(null)}
                  onClick={handleSortClick}
                >
                  {/* Hover circle background */}
                  {hoveredIcon === "sort" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F0F1F2] rounded-full w-[18px] h-[18px]" />
                  )}
                  <div className="relative">
                    {sortState === "desc" ? (
                      <SortingIconDesc />
                    ) : (
                      <SortingIconAsc />
                    )}
                  </div>
                </div>
              </div>

              {/* Filter icon - only visible on hover when not sorted */}
              {sortState === "none" && isHeaderHovered && (
                <div
                  className="content-stretch flex items-center px-[4px] py-[8px] relative shrink-0"
                  data-name="sort"
                >
                  <div
                    className="content-stretch flex items-center justify-center p-[3px] relative rounded-[9px] shrink-0 cursor-pointer"
                    data-name="sorting"
                    onMouseEnter={() =>
                      setHoveredIcon("filter")
                    }
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    {/* Hover circle background */}
                    {hoveredIcon === "filter" && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F0F1F2] rounded-full w-[18px] h-[18px]" />
                    )}
                    <div className="relative">
                      <FilterIcon />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Kebab menu - only visible on hover */}
          {isHeaderHovered && (
            <div
              className="content-stretch flex h-[34px] items-center justify-center p-[4px] relative shrink-0"
              data-name="kebab"
            >
              <div
                className="content-stretch flex items-center justify-center p-[3px] relative rounded-[9px] shrink-0 cursor-pointer"
                data-name="kebab"
                onMouseEnter={() => setHoveredIcon("kebab")}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={handleKebabClick}
              >
                {/* Hover circle background */}
                {hoveredIcon === "kebab" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F0F1F2] rounded-full w-[18px] h-[18px]" />
                )}
                <div className="flex flex-row items-center self-stretch relative">
                  <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[12px]">
                    <div
                      className="content-stretch flex items-center overflow-clip px-[5px] py-px relative shrink-0"
                      data-name="kebab"
                    >
                      <KebabIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Kebab dropdown menu */}
              {showKebabMenu && sortState !== "none" && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-[#ced0d3] rounded shadow-lg z-20 min-w-[120px]">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-[#F0F1F2] font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#2f3646]"
                    onClick={handleUnsort}
                  >
                    Unsort
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Render sorted or unsorted data */}
      <div className="hidden">{JSON.stringify(sortedData)}</div>
    </>
  );
}

// Table row component
function TableRow({ text }: { text: string }) {
  return (
    <div
      className="bg-white h-[54px] mb-[-1px] relative shrink-0 w-full hover:bg-slate-50 transition-colors"
      data-name="Input Fields"
      role="row"
      tabIndex={0}
      aria-label={`Grid row: ${text}`}
      onKeyDown={(e) => {
        if (e.key === "ArrowDown") {
          const next = (e.currentTarget.nextElementSibling as HTMLElement | null);
          if (next) next.focus();
        } else if (e.key === "ArrowUp") {
          const prev = (e.currentTarget.previousElementSibling as HTMLElement | null);
          if (prev) prev.focus();
        }
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border-slate-200 border-b border-solid border-t inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[12px] relative size-full" role="gridcell" tabIndex={-1}>
          <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[14px] text-slate-900 whitespace-pre-wrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

// Enhanced column component with filter and sort features
function FilterableSortableColumn({
  header,
  data,
  columnKey,
  allData,
  visibleRowIndices,
  setVisibleRowIndices,
  columnIndex,
  focusedRow,
  focusedCol,
  setFocusedRow,
  setFocusedCol,
}: {
  header: string;
  data: string[];
  columnKey: string;
  allData: {
    names: string[];
    lastNames: string[];
    statuses: string[];
    emails: string[];
  };
  visibleRowIndices: number[];
  setVisibleRowIndices: (indices: number[]) => void;
  columnIndex?: number;
  focusedRow?: number | null;
  focusedCol?: number | null;
  setFocusedRow?: (row: number | null) => void;
  setFocusedCol?: (col: number | null) => void;
}) {
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<
    "sort" | "filter" | "kebab" | null
  >(null);
  const [sortState, setSortState] = useState<
    "none" | "asc" | "desc"
  >("none");
  const [showKebabMenu, setShowKebabMenu] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [filterColumn, setFilterColumn] = useState<
    "names" | "lastNames" | "statuses" | "emails"
  >(columnKey as "names" | "lastNames" | "statuses" | "emails");
  const [filterValue, setFilterValue] = useState("");
  const [filterOperator, setFilterOperator] = useState<
    | "contains"
    | "equals"
    | "startsWith"
    | "endsWith"
    | "greater"
    | "greaterThan"
    | "lessThanGreater"
    | "notEqual"
    | "smaller"
    | "empty"
    | "notEmpty"
  >("contains");
  const [activeFilter, setActiveFilter] = useState<{
    column: string;
    operator: string;
    value: string;
  } | null>(null);
  const [showAutocomplete, setShowAutocomplete] =
    useState(false);
  const [autocompleteOptions, setAutocompleteOptions] =
    useState<string[]>([]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Close kebab menu
      if (
        showKebabMenu &&
        !target.closest("[data-kebab-menu]") &&
        !target.closest("[data-kebab-button]")
      ) {
        setShowKebabMenu(false);
      }

      // Close filter panel
      if (
        showFilterPanel &&
        !target.closest("[data-filter-panel]") &&
        !target.closest("[data-filter-button]")
      ) {
        setShowFilterPanel(false);
      }
    };

    if (showKebabMenu || showFilterPanel) {
      document.addEventListener(
        "mousedown",
        handleClickOutside,
      );
      return () =>
        document.removeEventListener(
          "mousedown",
          handleClickOutside,
        );
    }
  }, [showKebabMenu, showFilterPanel]);

  const applyFilters = (dataToFilter: string[]) => {
    if (!activeFilter || !activeFilter.value)
      return dataToFilter;

    return dataToFilter.filter((item) => {
      const lowerItem = item.toLowerCase();
      const lowerValue = activeFilter.value.toLowerCase();

      switch (activeFilter.operator) {
        case "contains":
          return lowerItem.includes(lowerValue);
        case "equals":
          return lowerItem === lowerValue;
        case "startsWith":
          return lowerItem.startsWith(lowerValue);
        case "endsWith":
          return lowerItem.endsWith(lowerValue);
        default:
          return true;
      }
    });
  };

  const handleSortClick = () => {
    let newSortState: "none" | "asc" | "desc";
    let newData = [...data];

    if (sortState === "none" || sortState === "desc") {
      newSortState = "asc";
      newData.sort((a, b) => a.localeCompare(b));
    } else {
      newSortState = "desc";
      newData.sort((a, b) => b.localeCompare(a));
    }

    setSortState(newSortState);
  };

  const handleApplyFilter = () => {
    if (filterValue.trim()) {
      setActiveFilter({
        column: filterColumn,
        operator: filterOperator,
        value: filterValue,
      });

      // Get the data for the selected column
      const columnData = allData[filterColumn];

      // Find matching row indices based on selected column
      const matchingIndices: number[] = [];
      columnData.forEach((item, index) => {
        const lowerItem = item.toLowerCase();
        const lowerValue = filterValue.toLowerCase();

        let matches = false;
        switch (filterOperator) {
          case "contains":
            matches = lowerItem.includes(lowerValue);
            break;
          case "equals":
            matches = lowerItem === lowerValue;
            break;
          case "startsWith":
            matches = lowerItem.startsWith(lowerValue);
            break;
          case "endsWith":
            matches = lowerItem.endsWith(lowerValue);
            break;
          case "empty":
            matches = !item.trim();
            break;
          case "notEmpty":
            matches = !!item.trim();
            break;
          default:
            matches = lowerItem.includes(lowerValue);
        }

        if (matches) {
          matchingIndices.push(index);
        }
      });

      // Apply sorting to the indices if active
      if (sortState === "asc") {
        matchingIndices.sort((a, b) =>
          data[a].localeCompare(data[b]),
        );
      } else if (sortState === "desc") {
        matchingIndices.sort((a, b) =>
          data[b].localeCompare(data[a]),
        );
      }

      setVisibleRowIndices(matchingIndices);
      setShowFilterPanel(false);
    }
  };

  const handleClearFilter = () => {
    setFilterValue("");
    setFilterOperator("contains");
    setFilterColumn(columnKey as "names" | "lastNames" | "statuses" | "emails");
    setActiveFilter(null);

    // Reset to all rows
    const allIndices = Array.from(
      { length: data.length },
      (_, i) => i,
    );

    // Reapply sorting if active
    if (sortState === "asc") {
      allIndices.sort((a, b) => data[a].localeCompare(data[b]));
    } else if (sortState === "desc") {
      allIndices.sort((a, b) => data[b].localeCompare(data[a]));
    }

    setVisibleRowIndices(allIndices);
    setShowFilterPanel(false);
  };

  const handleUnsort = () => {
    setSortState("none");
    setShowKebabMenu(false);
  };

  const handleKebabClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowKebabMenu(!showKebabMenu);
  };

  const handleFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowFilterPanel(!showFilterPanel);
  };

  const handleFilterInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setFilterValue(value);

    // Autocomplete logic
    if (value) {
      const filteredOptions = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setAutocompleteOptions(filteredOptions);
      setShowAutocomplete(true);
    } else {
      setShowAutocomplete(false);
    }
  };

  const handleAutocompleteSelect = (option: string) => {
    setFilterValue(option);
    setShowAutocomplete(false);
  };

  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0 w-full" role="presentation">
      {/* Header */}
      <div
        className="bg-white content-stretch flex items-center justify-between mb-[-1px] border-b border-slate-200 relative shrink-0 w-[236px] group sticky top-0 z-[1]"
        data-name="dg2Topbar"
        role="columnheader"
        aria-label={`Column header ${header}`}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => {
          setIsHeaderHovered(false);
          setHoveredIcon(null);
        }}
      >
        {/* Dragger */}
        <div
          className="h-[34px] shrink-0 w-[12.879px]"
          data-name="dragger"
        />

        {/* Active content */}
        <div
          className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative"
          data-name="active"
        >
          {/* Content with text */}
          <div
            className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px pr-[12.879px] relative"
            data-name="content"
          >
            {/* Dragger */}
            <div
              className="content-stretch flex items-center mr-[-12.879px] relative shrink-0"
              data-name="dragger"
            >
              <div
                className="h-[34px] shrink-0 w-[12.879px]"
                data-name="dragger"
              />
            </div>

            {/* Text content */}
            <div
              className="content-stretch flex items-center mr-[-12.879px] pr-[4px] py-[10px] relative shrink-0 w-[85px]"
              data-name="content"
            >
              <p className="flex-[1_0_0] font-['Open_Sans:Bold',sans-serif] leading-[14px] min-h-px min-w-px not-italic relative text-[12px] text-black whitespace-pre-wrap">
                {header}
              </p>
            </div>

            {/* Icons container */}
            <div
              className={`content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px mr-[-12.879px] relative transition-opacity duration-200 ${
                isHeaderHovered ||
                sortState !== "none" ||
                activeFilter
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              data-name="Icons"
              role="group"
              aria-label="Header actions"
            >
              {/* Sort icon - always visible when sorted or on hover */}
              <div
                className="h-[34px] relative shrink-0 w-[26px]"
                data-name="sort"
              >
                <button
                  type="button"
                  className="absolute content-stretch flex items-center justify-center left-[4px] p-[3px] rounded-[9px] top-[8px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  data-name="sorting"
                  onMouseEnter={() => setHoveredIcon("sort")}
                  onMouseLeave={() => setHoveredIcon(null)}
                  onClick={handleSortClick}
                  aria-label="Toggle sort order"
                >
                  {hoveredIcon === "sort" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 rounded-full w-[18px] h-[18px]" />
                  )}
                  <div className="relative">
                    {sortState === "desc" ? (
                      <SortingIconDesc />
                    ) : (
                      <SortingIconAsc />
                    )}
                  </div>
                </button>
              </div>

              {/* Filter icon - visible on hover OR when filter is active OR when panel is open */}
              {(isHeaderHovered ||
                activeFilter ||
                showFilterPanel) && (
                <div
                  className="content-stretch flex items-center px-[4px] py-[8px] relative shrink-0"
                  data-name="filter-container"
                >
                  <button
                    type="button"
                    data-filter-button
                    className="content-stretch flex items-center justify-center p-[3px] relative rounded-[9px] shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    data-name="sorting"
                    onMouseEnter={() =>
                      setHoveredIcon("filter")
                    }
                    onMouseLeave={() => setHoveredIcon(null)}
                    onClick={handleFilterClick}
                    aria-label="Open filter panel"
                  >
                    {/* Hover circle background */}
                    {hoveredIcon === "filter" && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 rounded-full w-[18px] h-[18px]" />
                    )}
                    <div className="relative">
                      {activeFilter ? (
                        <FilterIconFilled />
                      ) : (
                        <FilterIcon />
                      )}
                    </div>
                  </button>

                  {/* Filter panel - positioned next to filter icon, stays open for interaction */}
                  {showFilterPanel && createPortal(
                    (() => {
                      const button = document.querySelector('[data-filter-button]') as HTMLElement;
                      const buttonRect = button?.getBoundingClientRect();
                      const panelWidth = 650;
                      const padding = 16;
                      let left = buttonRect?.left || 0;
                      
                      // Adjust if panel would go off the right side of screen
                      if (left + panelWidth + padding > window.innerWidth) {
                        left = window.innerWidth - panelWidth - padding;
                      }
                      // Ensure it doesn't go off the left side either
                      if (left < padding) {
                        left = padding;
                      }
                      
                      return (
                        <div
                          data-filter-panel
                          className="fixed bg-white border border-slate-300 rounded-lg shadow-xl z-[9999] min-w-[650px] w-max backdrop-blur-sm"
                          style={{
                            top: `${(buttonRect?.bottom || 0) + 8}px`,
                            left: `${left}px`,
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                      <div className="p-4 border-b border-slate-200">
                        <h3 className="font-['Open_Sans:Semibold',sans-serif] text-slate-900 text-[14px] mb-4">Filter Options</h3>
                        <div className="flex gap-3 items-end mb-3">
                          {/* X button on the left - always visible */}
                          <button
                            className="text-slate-500 hover:text-slate-700 transition-colors flex-shrink-0 p-1 rounded hover:bg-slate-100"
                            onClick={handleClearFilter}
                            title="Clear filter"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M12 4L4 12M4 4L12 12"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>

                          {/* Column selector */}
                          <div className="flex-1">
                            <label className="block font-['Open_Sans:Semibold',sans-serif] text-[12px] text-slate-700 mb-2">
                              Column
                            </label>
                            <select
                              className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 custom-select hover:border-slate-400 transition-colors"
                              value={filterColumn}
                              onChange={(e) =>
                                setFilterColumn(
                                  e.target.value as
                                    | "names"
                                    | "lastNames"
                                    | "statuses"
                                    | "emails",
                                )
                              }
                            >
                              <option value="names">
                                Name
                              </option>
                              <option value="lastNames">
                                Last name
                              </option>
                              <option value="statuses">
                                Status
                              </option>
                              <option value="emails">
                                Email
                              </option>
                            </select>
                          </div>

                          {/* Operator selector */}
                          <div className="flex-1">
                            <label className="block font-['Open_Sans:Semibold',sans-serif] text-[12px] text-slate-700 mb-2">
                              Condition
                            </label>
                            <select
                              className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 custom-select hover:border-slate-400 transition-colors"
                              value={filterOperator}
                              onChange={(e) =>
                                setFilterOperator(
                                  e.target.value as any,
                                )
                              }
                            >
                              <option value="contains">
                                Contains
                              </option>
                              <option value="endsWith">
                                Ends with
                              </option>
                              <option value="startsWith">
                                Starts with
                              </option>
                              <option value="equals">
                                Equals
                              </option>
                              <option value="greater">
                                Greater
                              </option>
                              <option value="greaterThan">
                                Greater than
                              </option>
                              <option value="lessThanGreater">
                                Less than greater
                              </option>
                              <option value="notEqual">
                                Not equal
                              </option>
                              <option value="smaller">
                                Smaller
                              </option>
                              <option value="empty">
                                Empty
                              </option>
                              <option value="notEmpty">
                                Not empty
                              </option>
                            </select>
                          </div>

                          {/* Value input */}
                          <div className="flex-1 relative">
                            <label className="block font-['Open_Sans:Semibold',sans-serif] text-[12px] text-slate-700 mb-2">
                              Value
                            </label>
                            <input
                              className="block w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-slate-400 transition-colors"
                              type="text"
                              value={filterValue}
                              onChange={handleFilterInputChange}
                              placeholder="Filter value"
                            />
                            {showAutocomplete &&
                              autocompleteOptions.length >
                                0 && (
                                <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-lg shadow-md z-30 max-h-[180px] overflow-y-auto custom-scrollbar">
                                  {autocompleteOptions.map(
                                    (option, index) => (
                                      <div
                                        key={`${option}-${index}`}
                                        className="px-3 py-2.5 cursor-pointer hover:bg-blue-50 font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-700 border-b border-slate-100 last:border-b-0"
                                        onClick={() =>
                                          handleAutocompleteSelect(
                                            option,
                                          )
                                        }
                                        onMouseDown={(e) =>
                                          e.preventDefault()
                                        }
                                      >
                                        {option}
                                      </div>
                                    ),
                                  )}
                                </div>
                              )}
                          </div>
                        </div>

                      </div>
                      <div className="flex gap-2 justify-end p-4 border-t border-slate-200 bg-slate-50">
                        <button
                          className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-['Open_Sans:Semibold',sans-serif] text-[13px] hover:bg-slate-50 transition-colors"
                          onClick={handleClearFilter}
                        >
                          Reset
                        </button>
                        <button
                          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-lg font-['Open_Sans:Semibold',sans-serif] text-[13px] hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={handleApplyFilter}
                          disabled={!filterValue.trim()}
                        >
                          Apply Filter
                        </button>
                      </div>
                    </div>
                      );
                    })(),
                    document.body
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Kebab menu - visible on hover OR when menu is open */}
          {(isHeaderHovered || showKebabMenu) && (
            <div
              className="content-stretch flex h-[34px] items-center justify-center p-[4px] relative shrink-0"
              data-name="kebab"
            >
              <button
                type="button"
                data-kebab-button
                className="content-stretch flex items-center justify-center p-[3px] relative rounded-[9px] shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                data-name="kebab"
                onMouseEnter={() => setHoveredIcon("kebab")}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={handleKebabClick}
                aria-label="Open column options"
              >
                {/* Hover circle background */}
                {hoveredIcon === "kebab" && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 rounded-full w-[18px] h-[18px]" />
                )}
                <div className="flex flex-row items-center self-stretch relative">
                  <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[12px]">
                    <div
                      className="content-stretch flex items-center overflow-clip px-[5px] py-px relative shrink-0"
                      data-name="kebab"
                    >
                      <KebabIcon />
                    </div>
                  </div>
                </div>
              </button>

              {/* Kebab dropdown menu */}
              {showKebabMenu && (
                <div
                  data-kebab-menu
                  className="absolute top-full right-0 mt-2 bg-white border border-slate-300 rounded-lg shadow-lg z-20 min-w-[180px] py-1"
                >
                  <button
                    className="w-full text-left px-4 py-2.5 hover:bg-blue-50 font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-700 flex items-center gap-2.5 transition-colors"
                    onClick={(e) => {
                      setShowKebabMenu(false);
                      handleFilterClick(e);
                    }}
                  >
                    <div className="w-[16px] h-[16px] flex items-center justify-center">
                      <MenuFilterIcon />
                    </div>
                    <span>Filter</span>
                  </button>
                  <button
                    className="w-full text-left px-4 py-2.5 hover:bg-blue-50 font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-700 flex items-center gap-2.5 transition-colors"
                    onClick={() => {
                      if (sortState !== "asc") {
                        handleSortClick();
                        if (sortState === "asc") {
                          handleSortClick();
                        }
                      }
                      setShowKebabMenu(false);
                    }}
                  >
                    <div className="w-[16px] h-[16px] flex items-center justify-center">
                      <MenuSortAscIcon />
                    </div>
                    <span>Sort A-Z</span>
                  </button>
                  <button
                    className="w-full text-left px-4 py-2.5 hover:bg-blue-50 font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-700 flex items-center gap-2.5 transition-colors"
                    onClick={() => {
                      if (sortState !== "desc") {
                        if (sortState === "none") {
                          handleSortClick();
                          handleSortClick();
                        } else {
                          handleSortClick();
                        }
                      }
                      setShowKebabMenu(false);
                    }}
                  >
                    <div className="w-[16px] h-[16px] flex items-center justify-center">
                      <MenuSortDescIcon />
                    </div>
                    <span>Sort Z-A</span>
                  </button>
                  {sortState !== "none" && (
                    <button
                      className="w-full text-left px-4 py-2.5 hover:bg-blue-50 font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-700 flex items-center gap-2.5 transition-colors"
                      onClick={handleUnsort}
                    >
                      <span>Clear Sort</span>
                    </button>
                  )}
                  <div className="border-t border-slate-200 my-1"></div>
                  <button
                    className="w-full text-left px-4 py-2.5 hover:bg-blue-50 font-['Open_Sans:Regular',sans-serif] text-[13px] text-slate-700 flex items-center gap-2.5 transition-colors"
                    onClick={() => {
                      setShowKebabMenu(false);
                      // Hide column functionality would go here
                    }}
                  >
                    <div className="w-[16px] h-[16px] flex items-center justify-center">
                      <MenuDownIcon />
                    </div>
                    <span>Hide column</span>
                  </button>
                  <button
                    className="w-full text-left px-3 py-1.5 hover:bg-[#F0F1F2] font-['Open_Sans:Regular',sans-serif] text-[12px] text-[#2f3646] flex items-center gap-2"
                    onClick={() => {
                      setShowKebabMenu(false);
                      // Manage columns functionality would go here
                    }}
                  >
                    <div className="w-[16px] h-[16px] flex items-center justify-center">
                      <MenuDownIcon />
                    </div>
                    <span>Manage columns</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Rows */}
      {visibleRowIndices.map((index) => (
        <TableRow key={index} text={data[index]} />
      ))}
    </div>
  );
}

export default function App() {
  // Master data for all columns
  const allData = {
    names: [
      "John",
      "Jane",
      "Alice",
      "Bob",
      "Charlie",
      "David",
      "Eve",
      "Frank",
      "Grace",
      "Hannah",
    ],
    lastNames: [
      "Doe",
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
    ],
    statuses: [
      "Active",
      "Inactive",
      "Pending",
      "Active",
      "Inactive",
      "Pending",
      "Active",
      "Inactive",
      "Pending",
      "Active",
    ],
    emails: [
      "john.doe@example.com",
      "jane.smith@example.com",
      "alice.johnson@example.com",
      "bob.williams@example.com",
      "charlie.brown@example.com",
      "david.jones@example.com",
      "eve.garcia@example.com",
      "frank.miller@example.com",
      "grace.davis@example.com",
      "hannah.rodriguez@example.com",
    ],
  };

  // State to track which rows are filtered by column actions
  const [columnFilteredRowIndices, setColumnFilteredRowIndices] = useState<
    number[]
  >(Array.from({ length: allData.names.length }, (_, i) => i));

  // Global quick-search text state
  const [globalSearchText, setGlobalSearchText] = useState("");

  // Keyboard navigation state
  const [focusedRow, setFocusedRow] = useState<number | null>(null);
  const [focusedCol, setFocusedCol] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation in the grid
  const handleGridKeyDown = (e: React.KeyboardEvent) => {
    if (!focusedRow || !focusedCol) return;

    let newRow = focusedRow;
    let newCol = focusedCol;

    switch (e.key) {
      case 'ArrowUp':
        newRow = Math.max(0, focusedRow - 1);
        break;
      case 'ArrowDown':
        newRow = Math.min(visibleRowIndices.length - 1, focusedRow + 1);
        break;
      case 'ArrowLeft':
        newCol = Math.max(0, focusedCol - 1);
        break;
      case 'ArrowRight':
        newCol = Math.min(3, focusedCol + 1); // 4 columns
        break;
      default:
        return;
    }

    e.preventDefault();
    setFocusedRow(newRow);
    setFocusedCol(newCol);

    // Focus the new cell
    const cellSelector = `[data-row="${newRow}"][data-col="${newCol}"]`;
    const cell = gridRef.current?.querySelector(cellSelector) as HTMLElement;
    if (cell) {
      cell.focus();
    }
  };

  const globalFilteredRowIndices = useMemo(() => {
    const query = globalSearchText.trim().toLowerCase();
    if (!query) {
      return Array.from({ length: allData.names.length }, (_, i) => i);
    }

    return allData.names
      .map((name, index) => ({
        index,
        matched:
          name.toLowerCase().includes(query) ||
          allData.lastNames[index].toLowerCase().includes(query) ||
          allData.statuses[index].toLowerCase().includes(query) ||
          allData.emails[index].toLowerCase().includes(query),
      }))
      .filter((item) => item.matched)
      .map((item) => item.index);
  }, [globalSearchText, allData]);

  const visibleRowIndices = useMemo(() => {
    if (!globalSearchText.trim()) {
      return columnFilteredRowIndices;
    }
    const globalSet = new Set(globalFilteredRowIndices);
    return columnFilteredRowIndices.filter((idx) => globalSet.has(idx));
  }, [globalSearchText, columnFilteredRowIndices, globalFilteredRowIndices]);

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f9fafb;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: #f9fafb;
        }
        .custom-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 4.5L6 7.5L9 4.5' stroke='%23475569' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 8px center;
          padding-right: 28px;
        }
      `}</style>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 w-full max-w-[1200px]">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-['Open_Sans:Bold',sans-serif] text-[28px] text-slate-900 leading-[32px] mb-2">
              Data Grid
            </h1>
            <p className="font-['Open_Sans:Regular',sans-serif] text-slate-600 text-[14px] leading-[21px]">
              Interactive data table with advanced filtering and sorting capabilities
            </p>
          </div>

          <div className="flex items-center justify-end w-full">
            <div
              role="search"
              className={`group flex items-center h-[40px] rounded-md bg-white px-3 pr-2 transition-colors duration-150 ${
                globalSearchText
                  ? "border border-blue-500 focus-within:border-blue-700 focus-within:ring-2 focus-within:ring-blue-300"
                  : "border border-slate-300 hover:border-slate-400 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-300"
              }`}
            >
              <div className="inline-flex items-center justify-center text-slate-500 group-focus-within:text-blue-700">
                <SearchIcon />
              </div>
              <input
                type="search"
                aria-label="Global search"
                value={globalSearchText}
                onChange={(e) => setGlobalSearchText(e.target.value)}
                placeholder="Search in all columns..."
                className="w-[260px] h-full ml-2 border-none bg-transparent outline-none text-slate-700 placeholder:text-slate-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
              />
              {globalSearchText && (
                <button
                  type="button"
                  onClick={() => setGlobalSearchText("")}
                  className="ml-2 text-slate-500 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        <div
          className="h-[299px] relative w-full overflow-y-auto overflow-x-auto custom-scrollbar"
          role="grid"
          aria-rowcount={visibleRowIndices.length}
          aria-colcount={4}
          tabIndex={-1}
        >
          <div className="flex gap-0 min-w-[944px]">
            <div className="w-[236.2px]">
              <FilterableSortableColumn
                header="Name"
                data={allData.names}
                columnKey="names"
                allData={allData}
                visibleRowIndices={visibleRowIndices}
                setVisibleRowIndices={setColumnFilteredRowIndices}
                columnIndex={0}
                focusedRow={focusedRow}
                focusedCol={focusedCol}
                setFocusedRow={setFocusedRow}
                setFocusedCol={setFocusedCol}
              />
            </div>
            <div className="w-[236.2px]">
              <FilterableSortableColumn
                header="Last name"
                data={allData.lastNames}
                columnKey="lastNames"
                allData={allData}
                visibleRowIndices={visibleRowIndices}
                setVisibleRowIndices={setColumnFilteredRowIndices}
                columnIndex={1}
                focusedRow={focusedRow}
                focusedCol={focusedCol}
                setFocusedRow={setFocusedRow}
                setFocusedCol={setFocusedCol}
              />
            </div>
            <div className="w-[236.2px]">
              <FilterableSortableColumn
                header="Status"
                data={allData.statuses}
                columnKey="statuses"
                allData={allData}
                visibleRowIndices={visibleRowIndices}
                setVisibleRowIndices={setColumnFilteredRowIndices}
                columnIndex={2}
                focusedRow={focusedRow}
                focusedCol={focusedCol}
                setFocusedRow={setFocusedRow}
                setFocusedCol={setFocusedCol}
              />
            </div>
            <div className="w-[236.2px]">
              <FilterableSortableColumn
                header="Email"
                data={allData.emails}
                columnKey="emails"
                allData={allData}
                visibleRowIndices={visibleRowIndices}
                setVisibleRowIndices={setColumnFilteredRowIndices}
                columnIndex={3}
                focusedRow={focusedRow}
                focusedCol={focusedCol}
                setFocusedRow={setFocusedRow}
                setFocusedCol={setFocusedCol}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}