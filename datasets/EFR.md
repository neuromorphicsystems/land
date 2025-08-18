---
{
    "name": "EFR",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "subcategory": [
        "Flicker Removal",
        "De-noising"
    ],
    "task": "Flicker removal (Noise Filtering)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1S2LiKrteh4N23SOghA0xU7rC1Q8trNCR",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 3.2,
        "size_type": "Uncompressed"
    },
    "paper": {
        "title": "A Linear Comb Filter for Event Flicker Removal",
        "doi": "10.1109/ICRA46639.2022.9812003",
        "authors": [
            "Ziwei Wang",
            "Dingran Yuan",
            "Yonhon Ng",
            "Robert Mahony"
        ],
        "abstract": "Event cameras are bio-inspired sensors that capture per-pixel asynchronous intensity change rather than the synchronous absolute intensity frames captured by a classical camera sensor. Such cameras are ideal for robotics applications since they have high temporal resolution, high dynamic range and low latency. However, due to their high temporal resolution, event cameras are particularly sensitive to \ufb02icker such as from \ufb02uorescent or LED lights. During every cycle from bright to dark, pixels that image a \ufb02ickering light source generate many events that provide little or no useful information for a robot, swamping the useful data in the scene. In this paper, we propose a novel linear \ufb01lter to preprocess event data to remove unwanted \ufb02icker events from an event stream. The proposed algorithm achieves over 4.6 times relative improvement in the signal-to-noise ratio when compared to the raw event stream due to the effective removal of \ufb02icker from \ufb02uorescent lighting. Thus, it is ideally suited to robotics applications that operate in indoor settings or scenes illuminated by \ufb02ickering light sources.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 14,
            "updated": "2025-06-16T11:42:16.512470"
        },
        {
            "source": "scholar",
            "count": 21,
            "updated": "2025-06-16T11:42:16.369878"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2205.08090"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9812003"
        },
        {
            "type": "github_page",
            "url": "https://github.com/ziweiWWANG/EFR"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "398--404",
        "year": 2022,
        "month": "may",
        "author": "Wang, Ziwei and Yuan, Dingran and Ng, Yonhon and Mahony, Robert",
        "publisher": "IEEE",
        "booktitle": "2022 {International} {Conference} on {Robotics} and {Automation} ({ICRA})",
        "urldate": "2024-04-13",
        "language": "en",
        "doi": "10.1109/ICRA46639.2022.9812003",
        "url": "https://ieeexplore.ieee.org/document/9812003/",
        "isbn": "978-1-72819-681-7",
        "copyright": "https://doi.org/10.15223/policy-029",
        "title": "A {Linear} {Comb} {Filter} for {Event} {Flicker} {Removal}",
        "address": "Philadelphia, PA, USA",
        "type": "inproceedings",
        "key": "wang_linear_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1117/12.872449",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP.2006.312711",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2017.2777140",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ECCE.2010.5618050",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2006.887979",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7758089",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2793357",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00490",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865228",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JPROC.2014.2347355",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7168735",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TETC.2017.2788865",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2016.7539103",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/EBCCSP.2016.7605086",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BIOROB.2016.7523452",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3088793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00568",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58583-9_32",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSI.2005.851390",
            "source": "crossref"
        },
        {
            "doi": "10.1109/82.673650",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00050",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "Event camera calibration of per-pixel biased contrast threshold",
            "source": "crossref"
        },
        {
            "title": "Asyn-chronous, photometric feature tracking using events and frames",
            "source": "crossref"
        },
        {
            "title": "Event-based vision: A survey",
            "source": "crossref"
        },
        {
            "title": "High speed and high dynamic range video with an event camera",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure