---
{
    "name": "RealSharp-DAVIS",
    "aliases": [],
    "year": 2022,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "tags": [
        "De-blurring"
    ],
    "description": "Frame/Event fusion (Motion Deblurring)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1h9_RqRybRMnTOsEuhFlHlaNy_OE68VUo",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 44.3,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-guided Deblurring of\u00a0Unknown Exposure Time Videos",
        "doi": "10.1007/978-3-031-19797-0_30",
        "authors": [
            "Taewoo Kim",
            "Jeongmin Lee",
            "Lin Wang",
            "Kuk-Jin Yoon"
        ],
        "abstract": "Motion deblurring is a highly ill-posed problem due to the loss of motion information in the blur degradation process. Since event cameras can capture apparent motion with a high temporal resolution, several attempts have explored the potential of events for guiding deblurring. These methods generally assume that the exposure time is the same as the reciprocal of the video frame rate. However, this is not true in real situations, and the exposure time might be unknown and dynamically varies depending on the video shooting environment (e.g., illumination condition). In this paper, we address the event-guided motion deblurring assuming dynamically variable unknown exposure time of the frame-based camera. To this end, we first derive a new formulation for event-guided motion deblurring by considering the exposure and readout time in the video frame acquisition process. We then propose a novel end-to-end learning framework for event-guided motion deblurring. In particular, we design a novel Exposure Time-based Event Selection (ETES) module to selectively use event features by estimating the cross-modal correlation between the features from blurred frames and the events. Moreover, we propose a feature fusion module to fuse the selected features from events and blur frames effectively. We conduct extensive experiments on various datasets and demonstrate that our method achieves state-of-the-art performance. Our project code and dataset are available at: https://intelpro.github.io/UEVD/",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 21,
            "updated": "2025-06-12T22:50:00.711701"
        },
        {
            "source": "scholar",
            "count": 42,
            "updated": "2025-06-12T22:50:00.538284"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2112.06988"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-19797-0_30"
        },
        {
            "type": "project_page",
            "url": "https://intelpro.github.io/UEVD/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/intelpro/UEVD_public"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "pages": "519--538",
        "note": "Series Title: Lecture Notes in Computer Science",
        "doi": "10.1007/978-3-031-19797-0_30",
        "year": 2022,
        "editor": "Avidan, Shai and Brostow, Gabriel and Ciss\u00e9, Moustapha and Farinella, Giovanni Maria and Hassner, Tal",
        "author": "Kim, Taewoo and Lee, Jeongmin and Wang, Lin and Yoon, Kuk-Jin",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer {Vision} \u2013 {ECCV} 2022",
        "urldate": "2024-12-19",
        "language": "en",
        "url": "https://link.springer.com/10.1007/978-3-031-19797-0_30",
        "isbn": "978-3-031-19796-3 978-3-031-19797-0",
        "volume": "13678",
        "title": "Event-guided {Deblurring} of {Unknown} {Exposure} {Time} {Videos}",
        "address": "Cham",
        "type": "incollection",
        "key": "avidan_event-guided_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1609/aaai.v35i2.16173",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW50498.2020.00237",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW53098.2021.00027",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00460",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00397",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.435",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46475-6_43",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01219-9_7",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00854",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00897",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00763",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58598-3_41",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00265",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3096985",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.35",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00829",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.244",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-66709-6_6",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00311",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3036667",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58539-6_20",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00449",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00516",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.33",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00146",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00853",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2022.3216216",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58601-0_10",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00214",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00067",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00834",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPRW.2019.00247",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2003.819861",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.34",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01234-2_1",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-01261-8_1",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00258",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01458",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00613",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2018.2867733",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00281",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-67832-6_29",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-030-58539-6_12",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00257",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.00206",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure
