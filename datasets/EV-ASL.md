---
{
    "name": "EV-ASL",
    "aliases": [],
    "year": 2021,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "DVS128"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "tags": [
        "Sign Language",
        "Hand Pose Detection"
    ],
    "description": "American Sign Language Dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Baidu"
        ],
        "file_formats": [],
        "availability_comment": "Download link has a single zip file",
        "dataset_links": [
            {
                "name": "Baidu",
                "url": "https://pan.baidu.com/s/1xPYenSSL8w_LcX8pe5i_0g",
                "format": "Binary",
                "available": true
            }
        ],
        "size_gb": 2.11,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Event-Based American Sign Language Recognition Using Dynamic Vision Sensor",
        "doi": "10.1007/978-3-030-86137-7_1",
        "authors": [
            "Yong Wang",
            "Xian Zhang",
            "Yanxiang Wang",
            "Hongbin Wang",
            "Chanying Huang",
            "Yiran Shen"
        ],
        "abstract": "American Sign language (ASL) is one of the most effective communication tools for people with hearing difficulties. However, most of people do not understand ASL. To bridge this gap, we propose EV-ASL, an automatic ASL interpretation system based on dynamic vision sensor (DVS). Compared to the traditional RGB-based approach, DVS consumes significantly less resources (energy, computation, bandwidth) and it outputs the moving objects only without the need of background subtraction due to its event-based nature. At last, because of its wide dynamic response range, it enables the EV-ASL to work under a variety of lighting conditions. EV-ASL proposes novel representation of event streams and facilitates deep convolutional neural network for sign recognition. In order to evaluate the performance of EV-ASL, we recruited 10 participants and collected 11,200 samples from 56 different ASL words. The evaluation shows that EV-ASL achieves a recognition accuracy of 93.25%.\n",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 1,
            "updated": "2025-09-14T23:04:08.758443"
        },
        {
            "source": "scholar",
            "count": 4,
            "updated": "2025-09-14T23:04:09.465721"
        }
    ],
    "links": [
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-030-86137-7_1"
        },
        {
            "type": "github_page",
            "url": "https://github.com/zhangxiann/EV_ASL/"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "10",
        "num_males": "6",
        "num_females": "4"
    },
    "referenced_papers": [
        {
            "doi": "10.1109/CVPRW.2019.00205",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2017.781",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2019.00058",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TIP.2020.3023597",
            "source": "crossref"
        },
        {
            "doi": "10.1109/ICCV.2017.332",
            "source": "crossref"
        },
        {
            "doi": "10.1609/aaai.v32i1.11903",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2016.2574707",
            "source": "crossref"
        },
        {
            "doi": "10.1109/JSSC.2007.914337",
            "source": "crossref"
        },
        {
            "doi": "10.3389/fncom.2015.00099",
            "source": "crossref"
        },
        {
            "doi": "10.1007/978-3-319-16178-5_40",
            "source": "crossref"
        },
        {
            "doi": "10.1109/WACV.2019.00199",
            "source": "crossref"
        },
        {
            "doi": "10.1109/CVPR.2019.00652",
            "source": "crossref"
        },
        {
            "doi": "10.1109/TPAMI.2021.3054886",
            "source": "crossref"
        },
        {
            "doi": "10.15607/RSS.2018.XIV.062",
            "source": "crossref"
        }
    ],
    "bibtex": {
        "pages": "3\u201310",
        "year": 2021,
        "author": "Wang, Yong and Zhang, Xian and Wang, Yanxiang and Wang, Hongbin and Huang, Chanying and Shen, Yiran",
        "publisher": "Springer International Publishing",
        "booktitle": "Wireless Algorithms, Systems, and Applications",
        "doi": "10.1007/978-3-030-86137-7_1",
        "url": "http://dx.doi.org/10.1007/978-3-030-86137-7_1",
        "issn": "1611-3349",
        "isbn": "9783030861377",
        "title": "Event-Based American Sign Language Recognition Using Dynamic Vision Sensor",
        "type": "book",
        "key": "Wang_2021"
    }
}
---

# Dataset Description

To evaluate the recognition accuracy of EV-ASL,  a dataset consisting of event-streams when different users are performing ASL words in front of DVS camera was collected. 56 words (26 one-hand words and 30 two-hand words) are included in the dataset. The words are frequent verbs, nouns, adjectives and pronouns, which are commonly used in daily life. 

When collecting the dataset, 10 participants (4 females, 6 males) were recruited to perform hands movement corresponding to each of the selected ASL word. Due to the constraints of Human IRB, all the participants have normal hearing ability. They learn the movement according to the ASL words by watching online learning videos for two hours. When doing the experiments, the environment and other conditions were not strictly controlled. 

During each experiment session, the participants perform the hands movement of each word for 20 times, so that we collected a total of 11,200 (= 10×56×20) samples.