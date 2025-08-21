---
{
    "name": "ESD",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [
        "Intel D435 RGBD"
    ],
    "category": "Object Detection, Classification, and Tracking",
    "tags": [
        "Object Segmentation"
    ],
    "description": "Object segmentation in indoor cluttered environments",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Figshare"
        ],
        "file_formats": [
            "Matlab"
        ],
        "availability_comment": "Link to dataset in Github does not work. ESD1 and ESD2 are listed individually on Figshare.",
        "dataset_links": [
            {
                "name": "ESD-1 (Figshare)",
                "url": "https://figshare.com/articles/dataset/ESD-1/22109117?file=39281594",
                "format": "Matlab",
                "available": true
            },
            {
                "name": "ESD-2 (Figshare)",
                "url": "https://figshare.com/articles/dataset/ESD-2/22109120?file=39281702",
                "format": "Matlab",
                "available": true
            }
        ],
        "size_gb": 84.32,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "A neuromorphic dataset for tabletop object segmentation in indoor cluttered environment",
        "doi": "10.1038/s41597-024-02920-1",
        "authors": [
            "Xiaoqian Huang",
            "Sanket Kachole",
            "Abdulla Ayyad",
            "Fariborz Baghaei Naeini",
            "Dimitrios Makris",
            "Yahya Zweiri"
        ],
        "abstract": "Event-based cameras are commonly leveraged to mitigate issues such as motion blur, low dynamic range, and limited time sampling, which plague conventional cameras. However, a lack of dedicated event-based datasets for benchmarking segmentation algorithms, especially those offering critical depth information for occluded scenes, has been observed. In response, this paper introduces a novel Event-based Segmentation Dataset (ESD), a high-quality event 3D spatial-temporal dataset designed for indoor object segmentation within cluttered environments. ESD encompasses 145 sequences featuring 14,166 manually annotated RGB frames, along with a substantial event count of 21.88 million and 20.80 million events from two stereo-configured event-based cameras. Notably, this densely annotated 3D spatial-temporal event-based segmentation benchmark for tabletop objects represents a pioneering initiative, providing event-wise depth, and annotated instance labels, in addition to corresponding RGBD frames. By releasing ESD, our aim is to offer the research community a challenging segmentation benchmark of exceptional quality.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 3,
            "updated": "2025-06-11T17:48:15.909712"
        },
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-06-11T17:48:15.697071"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2302.06301"
        },
        {
            "type": "paper",
            "url": "https://www.nature.com/articles/s41597-024-02920-1"
        },
        {
            "type": "github_page",
            "url": "https://github.com/yellow07200/ESD_labeling_tool"
        }
    ],
    "full_name": " Event-based Segmentation Dataset (ESD)",
    "additional_metadata": {
        "num_recordings": "145",
        "num_frames": "14166",
        "synchronisation_method": "Hardware Synchronisation",
        "stereo": true
    },
    "bibtex": {
        "pages": "127",
        "year": 2024,
        "month": "jan",
        "author": "Huang, Xiaoqian and Kachole, Sanket and Ayyad, Abdulla and Naeini, Fariborz Baghaei and Makris, Dimitrios and Zweiri, Yahya",
        "journal": "Scientific Data",
        "urldate": "2024-12-15",
        "number": "1",
        "language": "en",
        "doi": "10.1038/s41597-024-02920-1",
        "url": "https://www.nature.com/articles/s41597-024-02920-1",
        "issn": "2052-4463",
        "volume": "11",
        "title": "A neuromorphic dataset for tabletop object segmentation in indoor cluttered environment",
        "type": "article",
        "key": "huang_neuromorphic_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/MRA.2012.2191995",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1757-899X/592/1/012154",
            "source": "crossref"
        },
        {
            "doi": "10.1126/science.288.5469.1189",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2016.7759345",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-017-1050-6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2020.2985815",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIM.2019.2919354",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s20164469",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2021.3071261",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10845-021-01887-9",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2020.3017738",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-009-0275-4",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8793917",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3060341",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-10602-1_48",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2016.350",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2015.7298965",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-24574-4_28",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2699184",
            "source": "crossref"
        },
        {
            "doi": "10.1109/IROS.2018.8593380",
            "source": "crossref"
        },
        {
            "doi": "10.1109/3DV50981.2020.00063",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00364",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00067",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2022.3145053",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19830-4_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TITS.2023.3300537",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3060707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00419",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TRO.2021.3062252",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2006.19",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.30.63",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.01003",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.rcim.2022.102419",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s10462-020-09888-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV51070.2023.01850",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW59228.2023.00248",
            "source": "crossref"
        },
        {
            "doi": "10.6084/m9.figshare.c.6432548.v1",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58621-8_33",
            "source": "crossref"
        },
        {
            "doi": "10.5281/zenodo.1234",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains145 recordings
- Contains 14166 labelled frames
- Sensors are synchronised using Hardware Synchronisation
- Contains two subsets: ESD-1 and ESD-2
  - ESD-1 Dataset (68.87 Gb): https://figshare.com/articles/dataset/ESD-1/22109117?file=39281594
  - ESD-2 Dataset (15.45 Gb): https://figshare.com/articles/dataset/ESD-2/22109120?file=39281702
