---
{
    "name": "SCIoI",
    "aliases": [],
    "year": 2023,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "Basler acA1300-200um"
    ],
    "category": "Domain Specific Application",
    "subcategory": [
        "Schlieren imaging",
        "Computation Imaging"
    ],
    "task": "Schlieren Imaging",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download",
            "Google Drive"
        ],
        "file_formats": [
            "HDF5"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://depositonce.tu-berlin.de/items/4e785f4c-a219-4882-965e-ab5c11b19b82",
                "format": "HDF5",
                "available": true
            },
            {
                "name": "Google Drive",
                "url": "https://depositonce.tu-berlin.de/items/4e785f4c-a219-4882-965e-ab5c11b19b82",
                "format": "HDF5",
                "available": true
            }
        ],
        "size_gb": 3.4,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based Background-Oriented Schlieren",
        "doi": "10.1109/TPAMI.2023.3328188",
        "authors": [
            "Shintaro Shiba",
            "Friedhelm Hamann",
            "Yoshimitsu Aoki",
            "Guillermo Gallego"
        ],
        "abstract": "Schlieren imaging is an optical technique to observe the flow of transparent media, such as air or water, without any particle seeding. However, conventional frame-based techniques require both high spatial and temporal resolution cameras, which impose bright illumination and expensive computation limitations. Event cameras offer potential advantages (high dynamic range, high temporal resolution, and data efficiency) to overcome such limitations due to their bio-inspired sensing principle. This article presents a novel technique for perceiving air convection using events and frames by providing the first theoretical analysis that connects event data and schlieren. We formulate the problem as a variational optimization one combining the linearized event generation model with a physically-motivated parameterization that estimates the temporal derivative of the air density. The experiments with accurately aligned frame- and event camera data reveal that the proposed method enables event cameras to obtain on par results with existing frame-based optical flow techniques. Moreover, the proposed method works under dark conditions where frame-based schlieren fails, and also enables slow-motion analysis by leveraging the event camera's advantages. Our work pioneers and opens a new stack of event camera applications, as we publish the source code as well as the first schlieren dataset with high-quality frame and event data.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 14,
            "updated": "2025-06-16T11:40:36.219939"
        },
        {
            "source": "scholar",
            "count": 24,
            "updated": "2025-06-16T11:40:36.060460"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2311.00434"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/10301562"
        },
        {
            "type": "github_page",
            "url": "https://github.com/tub-rip/event_based_bos"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "total_duration": "143.7 seconds",
        "stereo": false
    },
    "bibtex": {
        "pages": "2011--2026",
        "year": 2024,
        "month": "apr",
        "author": "Shiba, Shintaro and Hamann, Friedhelm and Aoki, Yoshimitsu and Gallego, Guillermo",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2024-12-14",
        "number": "4",
        "language": "en",
        "doi": "10.1109/TPAMI.2023.3328188",
        "url": "https://ieeexplore.ieee.org/document/10301562/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "copyright": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
        "volume": "46",
        "title": "Event-{Based} {Background}-{Oriented} {Schlieren}",
        "type": "article",
        "key": "shiba_event-based_2024"
    },
    "referenced_papers": [
        {
            "doi": "10.1007/978-3-642-56640-0",
            "source": "crossref"
        },
        {
            "doi": "10.1088/1361-6501/aa5748",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.optlaseng.2022.107104",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/isscc19947.2020.9063149",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-662-03637-2",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2023.3236344",
            "source": "crossref"
        },
        {
            "doi": "10.1088/0957-0233/12/9/325",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-007-0331-1",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-008-0572-7",
            "source": "crossref"
        },
        {
            "doi": "10.2514/1.J060218",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-015-1927-5",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-019-2865-4",
            "source": "crossref"
        },
        {
            "doi": "10.1007/BF02425031",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00193-008-0142-1",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-016-2271-0",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-009-0709-3",
            "source": "crossref"
        },
        {
            "doi": "10.2514/1.J059495",
            "source": "crossref"
        },
        {
            "doi": "10.3934/jcd.2014.1.391",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-004-0807-1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNNLS.2013.2273537",
            "source": "crossref"
        },
        {
            "doi": "10.15607/rss.2018.xiv.062",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19797-0_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LSP.2023.3234800",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3130049",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3053243",
            "source": "crossref"
        },
        {
            "doi": "10.1002/aisy.202200251",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2016.2645143",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.616",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.00569",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01724",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR52688.2022.01723",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3224051",
            "source": "crossref"
        },
        {
            "doi": "10.1109/iscas45731.2020.9180436",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s00348-022-03441-6",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58526-6_3",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11263-019-01209-w",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2019.8794255",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00345",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2022.3230727",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-20873-8_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2014.6865228",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2018.2800793",
            "source": "crossref"
        },
        {
            "doi": "10.1109/LRA.2021.3068942",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.28.26",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00155",
            "source": "crossref"
        },
        {
            "doi": "10.1007/3-540-45103-X_50",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19790-1_40",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-031-19781-9_36",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "title": "Of a new property in the air",
            "source": "crossref"
        },
        {
            "title": "Self-supervised learning of event-based optical flow with spiking neural networks",
            "source": "crossref"
        },
        {
            "title": "Frequency Cam: Imaging periodic signals in real-time",
            "source": "crossref"
        },
        {
            "title": "Event-based camera pose tracking using a generative event model",
            "source": "crossref"
        },
        {
            "title": "Unraveling the paradox of intensity-dependent DVS pixel noise",
            "source": "crossref"
        },
        {
            "title": "An introduction to fast Poisson solvers",
            "source": "crossref"
        },
        {
            "title": "Adam: A method for stochastic optimization",
            "source": "crossref"
        },
        {
            "title": "Stereo co-capture system for recording and tracking fish with frame- and event cameras",
            "source": "crossref"
        },
        {
            "title": "ESIM: An open event camera simulator",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 

- Dataset contains a total of 143.7 seconds of data.

| **Sequence**       | **Convection** | **Luminance (lx)** | **Duration (s)** | **Event Rate (Me/s)** |
|--------------------|----------------|--------------------|------------------|-----------------------|
| Hot plate 1        | Natural        | 4000               | 19.4             | 11.3                  |
| Hot plate 2        | Natural        | 225                | 19.8             | 5.1                   |
| Hair dryer (OFF) 1 | Natural        | 4000               | 13.5             | 5.1                   |
| Hair dryer (OFF) 2 | Natural        | 4000               | 19.7             | 5.3                   |
| Hair dryer (OFF) 3 | Natural        | 225                | 14.7             | 2.8                   |
| Crushed ice        | Natural        | 4000               | 17.4             | 5                     |
| Hair dryer (ON)    | Forced         | 4000               | 13.4             | 15                    |
| Breathing 1        | Forced         | 4000               | 12.8             | 4                     |
| Breathing 2        | Forced         | 4000               | 13               | 3.7                   |

| **Sequence**       | **ROI Size (px)** | **ROI position (px)** | **Duration** | **Total Events** |
|--------------------|-------------------|-----------------------|--------------|------------------|
| Hot plate 1        | 640×720           | [320, 0]              | 10 to 14     | 51900802         |
| Hot plate 2 (dark) | 640 × 720         | [420, 0]              | 12 to 14     | 12912262         |
| Hair dryer (OFF) 1 | 640 × 640         | [320, 0]              | 4 to 7       | 13498252         |
| Hair dryer (OFF) 2 | 512×640           | [384, 0]              | 6 to 7       | 4089883          |
| Hair dryer (dark)  | 512 × 640         | [384, 0]              | 5 to 7       | 3460579          |
| Crushed ice        | 512×512           | [384, 208]            | 8 to 11      | 5856190          |
| Hair dryer (ON)    | 1280 × 200        | [0, 260]              | 3.3 to 4.3   | 17860129         |
| Breathing 1        | 590×600           | [400, 0]              | 4.36 to 5.5  | 2783122          |
| Breathing 2        | 640 × 640         | [447, 0]              | 2.5 to 3.5   | 1811889          |