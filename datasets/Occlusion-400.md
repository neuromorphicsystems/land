---
{
    "name": "Occlusion-400",
    "aliases": [],
    "year": 2022,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "Synthetic Aperture Imaging",
        "De-occlusion"
    ],
    "description": "Image De-occlusion",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Direct Download"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Direct Download",
                "url": "https://cloud.tsinghua.edu.cn/f/ece1ded9ade04a7291a2/?dl=1",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 6.6,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Image De-occlusion via Event-enhanced Multi-modal Fusion Hybrid Network",
        "doi": "10.1007/s11633-022-1350-3",
        "authors": [
            "Si-Qi Li",
            "Yue Gao",
            "Qiong-Hai Dai"
        ],
        "abstract": "Seeing through dense occlusions and reconstructing scene images is an important but challenging task. Traditional frame-based image de-occlusion methods may lead to fatal errors when facing extremely dense occlusions due to the lack of valid information available from the limited input occluded frames. Event cameras are bio-inspired vision sensors that record the brightness changes at each pixel asynchronously with high temporal resolution. However, synthesizing images solely from event streams is ill-posed since only the brightness changes are recorded in the event stream, and the initial brightness is unknown. In this paper, we propose an event-enhanced multi-modal fusion hybrid network for image de-occlusion, which uses event streams to provide complete scene information and frames to provide color and texture information. An event stream encoder based on the spiking neural network (SNN) is proposed to encode and denoise the event stream efficiently. A comparison loss is proposed to generate clearer results. Experimental results on a large-scale event-based and frame-based image de-occlusion dataset demonstrate that our proposed method achieves state-of-the-art performance.",
        "open_access": true
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 9,
            "updated": "2025-06-16T11:55:22.489241"
        },
        {
            "source": "scholar",
            "count": 14,
            "updated": "2025-06-16T11:55:22.355390"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://link.springer.com/article/10.1007/s11633-022-1350-3#preview"
        },
        {
            "type": "github_page",
            "url": "https://github.com/lisiqi19971013/Event_Enhanced_DeOcc"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "400",
        "stereo": false
    },
    "bibtex": {
        "pages": "307\u2013318",
        "month": "jul",
        "year": 2022,
        "author": "Li, Si-Qi and Gao, Yue and Dai, Qiong-Hai",
        "publisher": "Springer Science and Business Media LLC",
        "journal": "Machine Intelligence Research",
        "number": "4",
        "doi": "10.1007/s11633-022-1350-3",
        "url": "http://dx.doi.org/10.1007/s11633-022-1350-3",
        "issn": "2731-5398",
        "volume": "19",
        "title": "Image De-occlusion via Event-enhanced Multi-modal Fusion Hybrid Network",
        "type": "article",
        "key": "Li_2022"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPR.2004.1315006",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2006.244",
            "source": "crossref"
        },
        {
            "doi": "10.1126/scirobotics.aaz9712",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2007.4409032",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TCSVT.2013.2242553",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2011.10.003",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSTSP.2017.2715012",
            "source": "crossref"
        },
        {
            "doi": "10.1016/j.patcog.2012.06.014",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV45572.2020.9093448",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2014.2342715",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00097",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00698",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2019.2963386",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00338",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01589",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2020.3010468",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR42600.2020.00174",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46466-4_21",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00407",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR46437.2021.01401",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV48922.2021.00444",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11633-020-1256-x",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TNN.2003.820440",
            "source": "crossref"
        },
        {
            "doi": "10.1113/jphysiol.1952.sp004764",
            "source": "crossref"
        },
        {
            "doi": "10.1103/PhysRevE.51.738",
            "source": "crossref"
        },
        {
            "doi": "10.1007/s11633-020-1277-0",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2017.2699184",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2018.00068",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2009.5206848",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-46475-6_43",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00108",
            "source": "crossref"
        }
    ]
}
---

### Dataset Structure

- Contains 400 samples
