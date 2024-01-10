import { Component } from "react";
import Newsitem from "./Newsitem";
import defaultImg from "../images/defaultImg.webp";
import InfiniteScroll from 'react-infinite-scroll-component';

class Newsbox extends Component {
    static defaultProps = {
        category: 'general'
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            totalResults: 0,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsFlow`;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews() {
        this.props.setProgress(10);
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = () => {
        this.setState({ page: this.state.page + 1 }, async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                articles: this.state.articles.concat(parseData.articles),
                totalResults: parseData.totalResults,
                loading: false
            });
        });

    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>NewsFlow - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h2>

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
                    >
                        <div className="NewsBox">
                            {this.state.articles.map((element) => {
                                return <Newsitem key={element.url} title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : defaultImg} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt ? element.publishedAt : ""} url={element.url} source={element.source.name} />
                            })}
                        </div>

                    </InfiniteScroll>
                </div>
            </>
        );
    }
}

export default Newsbox;