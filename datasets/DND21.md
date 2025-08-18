---
{
    "name": "DND21",
    "aliases": [],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346",
        "V2E"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "subcategory": [
        "Benchmarking",
        "De-noising"
    ],
    "task": "Testing De-noising algorithms",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "",
        "dataset_links": [],
        "size_gb": 0.002,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Low Cost and Latency Event Camera Background Activity Denoising",
        "doi": "10.1109/TPAMI.2022.3152999",
        "authors": [
            "Shasha Guo",
            "Tobi Delbruck"
        ],
        "abstract": "Dynamic Vision Sensor (DVS) event camera output includes uninformative background activity (BA) noise events that increase dramatically under dim lighting. Existing denoising algorithms are not effective under these high noise conditions. Furthermore, it is dif\ufb01cult to quantitatively compare algorithm accuracy. This paper proposes a novel framework to better quantify BA denoising algorithms by measuring receiver operating characteristics with known mixtures of signal and noise DVS events. New datasets for stationary and moving camera applications of DVS in surveillance and driving are used to compare 3 new low-cost algorithms: Algorithm 1 checks distance to past events using a tiny \ufb01xed size window and removes most of the BA while preserving most of the signal for stationary camera scenarios. Algorithm 2 uses a memory proportional to the number of pixels for improved correlation checking. Compared with existing methods, it removes more noise while preserving more signal. Algorithm 3 uses a lightweight multilayer perceptron classi\ufb01er driven by local event time surfaces to achieve the best accuracy over all datasets. The code and data are shared with the paper as DND21.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 59,
            "updated": "2025-07-07T09:08:51.531872"
        },
        {
            "source": "scholar",
            "count": 103,
            "updated": "2025-07-07T09:08:51.049745"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/9720086"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/dnd21/datasets?authuser=0"
        }
    ],
    "full_name": "De-Noising Dataset 2021",
    "bibtex": {
        "pages": "785--795",
        "year": 2023,
        "month": "jan",
        "author": "Guo, Shasha and Delbruck, Tobi",
        "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        "urldate": "2023-09-05",
        "number": "1",
        "language": "en",
        "doi": "10.1109/TPAMI.2022.3152999",
        "url": "https://ieeexplore.ieee.org/document/9720086/",
        "issn": "0162-8828, 2160-9292, 1939-3539",
        "volume": "45",
        "title": "Low {Cost} and {Latency} {Event} {Camera} {Background} {Activity} {Denoising}",
        "type": "article",
        "key": "guo_low_2023"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/ISCAS.2015.7168735",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01263",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00177",
            "source": "crossref"
        },
        {
            "doi": "10.1038/s42256-021-00356-5",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSII.2018.2824899",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fnins.2018.00118",
            "source": "crossref"
        },
        {
            "doi": "10.1109/MSP.2019.2928127",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00146",
            "source": "crossref"
        },
        {
            "doi": "10.1109/BIOROB.2016.7523452",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ASP-DAC47756.2020.9045268",
            "source": "crossref"
        },
        {
            "doi": "10.1109/SOCC46988.2019.1570553690",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICIP40778.2020.9191148",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2021.3098539",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-80119-9_44",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00168",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3008413",
            "source": "crossref"
        },
        {
            "doi": "10.3390/s20061600",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00144",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TETC.2017.2788865",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TED.2017.2717848",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ISCAS.2015.7169170",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ACCESS.2019.2941282",
            "source": "crossref"
        },
        {
            "doi": "10.3390/app10062024",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICRA.2015.7139876",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TMM.2020.2993957",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.5244/C.31.33",
            "source": "crossref"
        },
        {
            "title": "A 132 by 104 10um-Pixel 250uW 1kefps dynamic vision sensor with Pixel-Parallel noise and spatial redundancy suppression",
            "source": "crossref"
        },
        {
            "title": "4.1 a 640x480 dynamic vision sensor with a 9um pixel and 300Meps address-event representation",
            "source": "crossref"
        },
        {
            "title": "Frame-free dynamic digital vision",
            "source": "crossref"
        },
        {
            "title": "EBBINNOT: A hardware efficient hybrid event-frame tracker for stationary neuromorphic vision sensors",
            "source": "crossref"
        },
        {
            "title": "A 1280x960 dynamic vision sensor with a 4.95um pixel pitch and motion artifact minimization",
            "source": "crossref"
        },
        {
            "title": "5.10 a 1280x720 Back-Illuminated stacked temporal contrast event-based vision sensor with 4.86um pixels, 1.066GEPS readout, programmable Event-Rate controller and compressive data-formatting pipeline",
            "source": "crossref"
        },
        {
            "title": "VLSI analogs of neuronal visual processing: A synthesis of form and function",
            "source": "crossref"
        },
        {
            "title": "High speed event-based visual processing in the presence of noise",
            "source": "crossref"
        }
    ]
}
---


### Dataset Structure 



---

### Tasks
- [ ]  Download the DND21 datasets and check file format, size, and availability